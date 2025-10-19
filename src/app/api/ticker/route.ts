// src/app/api/ticker/route.ts

import { NextResponse } from 'next/server';

const API_URL = 'https://api.coingecko.com/api/v3/simple/price';

export async function GET() {
    try {
        // 1. Fetch data for Bitcoin and Ethereum
        const response = await fetch(
            `${API_URL}?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true`,
            {
                // Important: Disable caching so the data is always fresh
                cache: 'no-store'
            }
        );

        if (!response.ok) {
            // Handle API errors gracefully
            return NextResponse.json({ error: 'Failed to fetch external financial data' }, { status: 500 });
        }

        const data = await response.json();

        // 2. Format the response for clean consumption by the frontend
        const formattedData = {
            timestamp: new Date().toISOString(),
            bitcoin: {
                price: data.bitcoin.usd,
                change24h: data.bitcoin.usd_24h_change,
            },
            ethereum: {
                price: data.ethereum.usd,
                change24h: data.ethereum.usd_24h_change,
            },
        };

        // 3. Return the formatted data
        return NextResponse.json(formattedData);

    } catch (error) {
        console.error('Ticker API error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}