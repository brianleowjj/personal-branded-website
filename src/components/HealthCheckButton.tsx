// components/HealthCheckButton.tsx

"use client";

import { useState, useCallback, FC } from 'react';

const HealthCheckButton: FC = () => {
    const [status, setStatus] = useState("Click to check API status");
    const [isLoading, setIsLoading] = useState(false);

    const checkHealth = useCallback(async () => {
        setIsLoading(true);
        setStatus("Checking...");
        try {
            const response = await fetch('/api/health-check');
            const data = await response.json();

            if (data.status === "OPERATIONAL") {
                setStatus(`Status: ✅ OPERATIONAL | Latency: ${data.latency_ms}ms`);
            } else {
                setStatus("Status: ❌ DEGRADED");
            }
        } catch (error) {
            setStatus("Error: Failed to connect to API");
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div>
            <button
                onClick={checkHealth}
                disabled={isLoading}
                className={`mt-4 px-6 py-3 font-bold rounded-lg transition-all duration-300 
                    ${isLoading
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg'
                    }
                `}
            >
                {isLoading ? "Running Node.js Check..." : "Test Backend API Health"}
            </button>
            <p
                className={`mt-3 text-md font-medium 
                    ${status.includes('OPERATIONAL') ? 'text-green-400' :
                        status.includes('DEGRADED') ? 'text-yellow-400' :
                            status.includes('Error') ? 'text-red-500' :
                                'text-gray-400'
                    }
                `}
            >
                {status}
            </p>
        </div>
    );
};

export default HealthCheckButton;