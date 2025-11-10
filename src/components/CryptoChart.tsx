// components/CryptoChart.tsx
import { Line } from 'react-chartjs-2';
import { ChartData } from 'chart.js';

// Define the shape of a single data point (passed from LiveTicker)
interface DataPoint {
    timestamp: string;
    price: number;
    change24h: number;
}

interface CryptoChartProps {
    coinName: string;
    chartData: DataPoint[];
    lineColor: string;
    label: string;
    maxDataPoints: number;
}

export default function CryptoChart({ coinName, chartData, lineColor, label, maxDataPoints }: CryptoChartProps) {

    // --- Chart Data Structure ---
    const data: ChartData<'line'> = {
        labels: chartData.map(p => p.timestamp), // Timestamps for X-axis
        datasets: [
            {
                label: label,
                data: chartData.map(p => p.price),
                borderColor: lineColor,
                backgroundColor: `${lineColor}20`, // Add opacity for area fill
                fill: true, // Fill the area under the line
                tension: 0.2, // Make the line slightly curved
                pointRadius: 3,
                pointHoverRadius: 5,
            },
        ],
    };

    // --- Chart Options ---
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: `${coinName} Price Trend`,
                color: '#FFFFFF',
                font: { size: 16 }
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => `$${context.formattedValue}`,
                }
            }
        },
        scales: {
            x: {
                title: { display: false },
                grid: { color: '#333333' },
                ticks: { color: '#A0A0A0', maxRotation: 0, minRotation: 0, autoSkip: true, maxTicksLimit: 6 },
            },
            y: {
                title: { display: true, text: 'Price (USD)', color: '#A0A0A0' },
                grid: { color: '#333333' },
                ticks: { color: '#A0A0A0', callback: (value: any) => `$${value.toFixed(2)}` },
            },
        },
    };

    return (
        // <div className="w-full pt-4 border-t border-gray-700">
        //     {/* Set a fixed height for the chart container */}
        //     <div className='w-full' style={{ height: '250px' }}>
        //         <Line data={data} options={options} />
        //     </div>
        // </div>
        <div className="w-full pt-4 border-t border-gray-700" style={{ height: '300px' }}>
            <Line data={data} options={options} />
        </div>
    );
}