// src/app/api/data/protected/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/utils/auth';

export async function GET(request: NextRequest) {
    // 1. Run the request through the authentication utility (middleware)
    const verificationResult = verifyToken(request);

    // 2. If it failed, return the error response immediately
    if (verificationResult instanceof NextResponse) {
        return verificationResult;
    }

    // 3. Success: Verification passed. Return the sensitive data.
    const decodedPayload = verificationResult;

    return NextResponse.json({
        success: true,
        message: 'Access Granted! This is highly sensitive FinTech data.',
        data: {
            // Mock sensitive data
            accountBalance: 1234567.89,
            lastLogin: new Date(decodedPayload.iat * 1000).toISOString(),
            user: decodedPayload.userId,
        },
        decodedPayload: decodedPayload,
    });
}