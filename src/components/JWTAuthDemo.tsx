// components/JWTAuthDemo.tsx
"use client";

import { useState } from 'react';

export default function JWTAuthDemo() {
    const [token, setToken] = useState<string | null>(null);
    const [protectedData, setProtectedData] = useState<any>(null);
    const [message, setMessage] = useState('Click "Generate Token" to begin.');
    const [loading, setLoading] = useState(false);

    const generateToken = async () => {
        setLoading(true);
        setMessage('Generating token...');
        setToken(null);
        setProtectedData(null);

        try {
            const response = await fetch('/api/auth/token', { method: 'POST' });
            const data = await response.json();

            if (data.success) {
                setToken(data.token);
                setMessage(data.message);
            } else {
                setMessage(`Error generating token: ${data.error}`);
            }
        } catch (error) {
            setMessage('Network error during token generation.');
        } finally {
            setLoading(false);
        }
    };

    const accessProtectedData = async (shouldFail = false) => {
        setLoading(true);
        setProtectedData(null);
        setMessage(shouldFail ? 'Attempting to access without a token...' : 'Attempting to access protected data...');

        const currentToken = shouldFail ? 'invalid-or-missing' : token;

        if (!token && !shouldFail) {
            setMessage('Token required. Please generate one first.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/data/protected', {
                method: 'GET',
                headers: {
                    // Send the JWT in the standard Authorization Header (Bearer scheme)
                    'Authorization': `Bearer ${currentToken}`
                }
            });
            const data = await response.json();

            if (response.ok) {
                setProtectedData(data);
                setMessage('SUCCESS: Protected data retrieved using a valid JWT!');
            } else {
                setProtectedData(data);
                setMessage(`ACCESS DENIED (${response.status}): ${data.error}`);
            }
        } catch (error) {
            setMessage('Network error during protected data access.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <p className="text-gray-400">
                This demo showcases my ability to implement JWT-based Authentication Middleware to protect backend API endpoints, a critical security practice in FinTech.
            </p>

            {/* Control Panel */}
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-700 space-y-4">
                <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Control Panel</h3>
                <button
                    onClick={generateToken}
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
                >
                    {loading && message.includes('token') ? 'Generating...' : '1. Generate JWT Token'}
                </button>
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => accessProtectedData(false)}
                        disabled={loading || !token}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
                    >
                        2A. Access Data (SUCCESS)
                    </button>
                    <button
                        onClick={() => accessProtectedData(true)}
                        disabled={loading}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
                    >
                        2B. Access Data (FAIL/No Token)
                    </button>
                </div>
            </div>

            {/* Status & Output */}
            <div className="space-y-4">
                <p className="text-lg font-medium text-teal-400">Status: {message}</p>

                {token && (
                    <div className="bg-gray-700 p-3 rounded-md text-sm break-all">
                        <h4 className="font-semibold text-white mb-1">Current Token (Sent in Header):</h4>
                        <code className="text-yellow-300">{token}</code>
                    </div>
                )}

                {protectedData && (
                    <div className="bg-gray-700 p-3 rounded-md text-sm">
                        <h4 className="font-semibold text-white mb-1">API Response:</h4>
                        <pre className="text-gray-200 overflow-auto whitespace-pre-wrap">{JSON.stringify(protectedData, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}