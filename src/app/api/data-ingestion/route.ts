// src/app/api/data-ingestion/route.ts

import { NextResponse } from 'next/server';
import { incrementCounter, getCounter, resetCounter } from './counterStore';

/**
 * Helper to count rows in text data (handles different line endings)
 */
function countRows(data: string): number {
    // Split by common line endings (\r\n, \n, \r) and filter out empty lines
    const rows = data.split(/\r?\n|\r/).filter(line => line.trim() !== '');
    // Subtract 1 if assuming a header row, but we'll just count all for simplicity.
    return rows.length;
}


// --- POST (Data Submission) ---
export async function POST(request: Request) {
    try {
        const { data } = await request.json();

        if (typeof data !== 'string' || data.trim() === '') {
            return NextResponse.json({ success: false, error: 'No data provided.' }, { status: 400 });
        }

        // 1. Data Parsing
        const rowCount = countRows(data);

        if (rowCount === 0) {
            return NextResponse.json({ success: false, error: 'Data contains no valid rows.' }, { status: 400 });
        }

        // 2. Concurrency Control (Atomic Update)
        const newState = incrementCounter(rowCount);

        return NextResponse.json({
            success: true,
            message: `Successfully processed ${rowCount} rows.`,
            processedRows: rowCount,
            counter: newState,
        });

    } catch (error) {
        console.error('Data ingestion POST error:', error);
        return NextResponse.json({ success: false, error: 'Internal server error during data processing.' }, { status: 500 });
    }
}


// --- GET (Fetch Current Counter State) ---
export async function GET() {
    return NextResponse.json({
        success: true,
        counter: getCounter(),
    });
}


// --- DELETE (Reset Counter for Demo) ---
export async function DELETE() {
    const newState = resetCounter();
    return NextResponse.json({
        success: true,
        message: 'Shared row counter has been reset.',
        counter: newState,
    });
}