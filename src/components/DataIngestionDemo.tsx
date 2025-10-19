// components/DataIngestionDemo.tsx
"use client";

import { useState, useEffect, useCallback, FormEvent } from 'react';

// Define the necessary status type locally for this demo
type DemoStatus = 'PENDING' | 'PROCESSING' | 'COMPLETE' | 'FAILED';

const sampleData = `Name,Value,Date
John Doe,12.34,2025-01-01
Jane Smith,56.78,2025-01-02
Alice Brown,90.12,2025-01-03
`;

interface Counter {
    totalRows: number;
    lastUpdated: string;
}

export default function DataIngestionDemo() {
    const [dataInput, setDataInput] = useState(sampleData);
    const [counter, setCounter] = useState<Counter>({ totalRows: 0, lastUpdated: new Date().toISOString() });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<DemoStatus>('PENDING');

    const fetchCounter = useCallback(async () => {
        try {
            const response = await fetch('/api/data-ingestion');
            const data = await response.json();
            if (data.success) {
                setCounter(data.counter);
            }
        } catch (e) {
            // Silence error, just keep current count
        }
    }, []);

    // Fetch initial count and set up polling
    useEffect(() => {
        fetchCounter();
        const intervalId = setInterval(fetchCounter, 5000); // Poll every 5 seconds
        return () => clearInterval(intervalId);
    }, [fetchCounter]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('PROCESSING');
        setMessage('Submitting data for ingestion...');

        try {
            const response = await fetch('/api/data-ingestion', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: dataInput }),
            });
            const data = await response.json();

            if (data.success) {
                setCounter(data.counter);
                setMessage(`Success! Processed ${data.processedRows} rows. Total: ${data.counter.totalRows}`);
                setStatus('COMPLETE');
            } else {
                setMessage(`ERROR: ${data.error}`);
                setStatus('FAILED');
            }
        } catch (error) {
            setMessage('Network error during submission.');
            setStatus('FAILED');
        } finally {
            setLoading(false);
        }
    };

    const handleReset = async () => {
        setLoading(true);
        try {
            await fetch('/api/data-ingestion', { method: 'DELETE' });
            setMessage('Counter successfully reset to 0.');
            setStatus('PENDING');
        } catch (e) {
            setMessage('Failed to reset counter.');
        } finally {
            fetchCounter();
            setLoading(false);
        }
    }

    // Helper to get color based on status
    const getStatusColor = (currentStatus: DemoStatus) => {
        switch (currentStatus) {
            case 'COMPLETE': return 'text-green-400';
            case 'PROCESSING': return 'text-yellow-400';
            case 'FAILED': return 'text-red-400';
            default: return 'text-blue-400';
        }
    };

    return (
        <div className="space-y-6">
            <p className="text-gray-400">
                This demo tests Backend Concurrency and Data Integrity. By clicking the submit button multiple times quickly, you test whether the backend can atomically update a shared resource (the total row count) without losing data, simulating concurrent users submitting data to a single database.
            </p>

            {/* Counter Display */}
            <div className="p-4 bg-gray-900 rounded-lg border border-teal-500/50 flex justify-between items-center">
                <div>
                    <span className="text-xl text-white font-medium">TOTAL ROWS SUBMITTED:</span>
                    <p className="text-4xl font-extrabold text-teal-400 mt-1">
                        {counter.totalRows.toLocaleString()}
                    </p>
                </div>
                <button
                    onClick={handleReset}
                    disabled={loading}
                    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors disabled:opacity-50 text-sm"
                >
                    Reset Counter
                </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 bg-gray-900 rounded-lg border border-gray-700 space-y-4">
                <h3 className="text-lg font-semibold text-white">Paste Tabular Data (.CSV / .TSV)</h3>

                <textarea
                    value={dataInput}
                    onChange={(e) => setDataInput(e.target.value)}
                    rows={5}
                    placeholder="Paste CSV or Tab-separated data here..."
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded text-gray-100 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
                >
                    {loading ? 'Processing...' : 'Submit Data & Increment Counter (Click Rapidly to Test Concurrency!)'}
                </button>
            </form>

            {/* Status */}
            {message && (
                <div className={`p-3 rounded-md border ${getStatusColor(status)} border-opacity-50`}>
                    <p className={`font-semibold ${getStatusColor(status)}`}>Status: {message}</p>
                </div>
            )}

        </div>
    );
}