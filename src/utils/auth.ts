// src/utils/auth.ts

import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Use a fallback secret for the demo. In a real app, use a secure environment variable.
const JWT_SECRET = process.env.JWT_SECRET || 'a-very-secure-fallback-key-for-portfolio-demo';

interface DecodedToken {
    userId: string;
    role: string;
    iat: number;
    exp: number;
}

/**
 * Utility to verify a JWT provided in the Authorization header.
 */
export function verifyToken(request: NextRequest): DecodedToken | NextResponse {
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json(
            { success: false, error: 'Authorization header missing or invalid. Use format: Bearer [token]' },
            { status: 401 }
        );
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
        return decoded;
    } catch (error) {
        console.error('JWT verification error:', error);
        return NextResponse.json(
            { success: false, error: 'Token is invalid or expired.' },
            { status: 403 }
        );
    }
}