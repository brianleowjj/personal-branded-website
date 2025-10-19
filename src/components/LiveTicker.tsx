// components/LiveTicker.tsx
"use client";

import { useState, useEffect, useCallback } from 'react';
// Import the new chart component
import CryptoChart from './CryptoChart';
import {
    Chart as ChartJS,
    CategoryScale, LinearScale, PointElement, LineElement,
    Title, Tooltip, Legend, Filler // Import Filler for the fill: true option
} from 'chart.js';

// **CRITICAL:** Register Chart.js components globally
ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement,
    Title, Tooltip, Legend, Filler // Register Filler
);

// --- INTERFACES AND CONSTANTS ---

interface DataPoint {
    timestamp: string;
    price: number;
    change24h: number;
}
interface CryptoHistory {
    bitcoin: DataPoint[];
    ethereum: DataPoint[];
}

const MAX_DATA_POINTS = 10;

// --- HELPER COMPONENT: COIN DISPLAY (Remains the same) ---

const CoinDisplay = ({ name, data }: { name: string; data: DataPoint }) => {
    const priceColor = data.change24h > 0 ? 'text-green-400' : 'text-red-400';
    const priceSign = data.change24h > 0 ? '▲' : '▼';

    return (
        <div className="flex justify-between items-center p-3 border border-gray-700 rounded-lg bg-gray-900 shadow-inner">
            <span className="text-xl font-semibold text-white">{name}</span>
            <div className="text-right">
                <p className="text-lg font-bold text-gray-200">
                    ${data.price.toFixed(2)}
                </p>
                <p className={`text-sm ${priceColor}`}>
                    {priceSign} {Math.abs(data.change24h).toFixed(2)}% (24h)
                </p>
            </div>
        </div>
    );
};


// --- MAIN COMPONENT ---

export default function LiveTicker() {
    const [history, setHistory] = useState<CryptoHistory>({
        bitcoin: [],
        ethereum: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('/api/ticker');
            const json = await response.json();

            if (response.ok) {
                setHistory(prevHistory => {
                    const newTimestamp = new Date().toLocaleTimeString('en-US', { hour12: false });

                    return {
                        bitcoin: [
                            ...prevHistory.bitcoin.slice(-MAX_DATA_POINTS + 1),
                            { timestamp: newTimestamp, price: json.bitcoin.price, change24h: json.bitcoin.change24h }
                        ],
                        ethereum: [
                            ...prevHistory.ethereum.slice(-MAX_DATA_POINTS + 1),
                            { timestamp: newTimestamp, price: json.ethereum.price, change24h: json.ethereum.change24h }
                        ],
                    };
                });
                setError(null);
            } else {
                setError(json.error || 'Unknown API error');
            }
        } catch (err) {
            setError('Connection failed. Check server log.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 15000);
        return () => clearInterval(intervalId);
    }, [fetchData]);


    if (loading) {
        return <div className="text-gray-400 p-4">Loading live data...</div>;
    }

    if (error || history.bitcoin.length === 0) {
        return <div className="text-red-500 p-4">Error fetching data or no data available: {error}</div>;
    }

    const latestBitcoinData = history.bitcoin.slice(-1)[0]!;
    const latestEthereumData = history.ethereum.slice(-1)[0]!;

    return (
        <div className="space-y-6 p-4 bg-gray-800 rounded-lg border border-teal-500/50">
            <h2 className="text-xl font-semibold text-teal-400 mb-3 border-b border-gray-700 pb-2">Live Ticker & Trend</h2>

            {/* FIGURES SECTION (Current Prices and 24h Change) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CoinDisplay name="Bitcoin (BTC)" data={latestBitcoinData} />
                <CoinDisplay name="Ethereum (ETH)" data={latestEthereumData} />
            </div>

            {/* 🚀 CHART SECTION 🚀 */}
            <div className="space-y-6">
                <CryptoChart
                    coinName="Bitcoin (BTC)"
                    chartData={history.bitcoin}
                    lineColor="#F7931A" // Classic Bitcoin Orange
                    label="BTC Price"
                    maxDataPoints={MAX_DATA_POINTS}
                />
                <CryptoChart
                    coinName="Ethereum (ETH)"
                    chartData={history.ethereum}
                    lineColor="#627EEA" // Classic Ethereum Blue
                    label="ETH Price"
                    maxDataPoints={MAX_DATA_POINTS}
                />
            </div>

            <p className="text-xs text-gray-500 mt-3 text-right">
                Live data feed. Last Updated: {latestBitcoinData.timestamp}
            </p>

            <p className="text-xs text-gray-600 text-right mt-1">
                Powered by <a
                    href="https://www.coingecko.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400"
                >
                    CoinGecko API
                </a>
            </p>
        </div>
    );
}