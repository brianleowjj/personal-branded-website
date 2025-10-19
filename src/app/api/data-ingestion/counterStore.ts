// src/app/api/data-ingestion/counterStore.ts
// Simulates a single shared counter in a database, ensuring atomic updates.

// Use a simple object to hold the single row counter
interface SharedCounter {
    totalRows: number;
    lastUpdated: string;
}

let counter: SharedCounter = {
    totalRows: 0,
    lastUpdated: new Date().toISOString(),
};

/**
 * Retrieves the current state of the shared counter.
 */
export function getCounter(): SharedCounter {
    return { ...counter }; // Return a copy to prevent external modification
}

/**
 * Atomically increments the total row count.
 * This function simulates a safe database transaction (e.g., PostgreSQL UPDATE or MongoDB $inc)
 * by using a synchronous block (in a single-threaded Node.js environment)
 * to prevent race conditions during the update.
 * * @param rowCount The number of rows parsed from the submitted data.
 * @returns The new state of the counter.
 */
export function incrementCounter(rowCount: number): SharedCounter {
    // This block MUST be synchronous to prevent Node.js from yielding 
    // to another concurrent request mid-update, simulating an atomic DB lock/transaction.

    // Safety check
    if (rowCount <= 0) {
        return getCounter();
    }

    counter.totalRows += rowCount;
    counter.lastUpdated = new Date().toISOString();

    // Optional: Log the update to show it's happening
    console.log(`[CONCURRENCY] Counter incremented by ${rowCount}. New total: ${counter.totalRows}`);

    return getCounter();
}

/**
 * Resets the counter for demonstration purposes.
 */
export function resetCounter(): SharedCounter {
    counter = {
        totalRows: 0,
        lastUpdated: new Date().toISOString(),
    };
    return getCounter();
}