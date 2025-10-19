// Example: /app/api/health-check/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
    const isHealthy = true; // Simulate a successful check
    const latency = Math.floor(Math.random() * 50) + 10; // Random latency between 10ms and 60ms

    return NextResponse.json({
        service: "Payment Gateway API",
        status: isHealthy ? "OPERATIONAL" : "DEGRADED",
        latency_ms: latency,
        timestamp: new Date().toISOString(),
    });
}