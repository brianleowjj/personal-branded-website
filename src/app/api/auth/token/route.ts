// src/app/api/auth/token/route.ts

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'a-very-secure-fallback-key-for-portfolio-demo';

export async function POST() {
    try {
        const payload = {
            userId: 'demo-fintech-user-123',
            role: 'read_only_client',
            issuedAt: Date.now(),
        };

        // Token is valid for 1 hour (3600 seconds)
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        return NextResponse.json({
            success: true,
            message: 'Token generated successfully. Valid for 1 hour.',
            token: token,
            expires: '1h',
        });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Token generation failed.' }, { status: 500 });
    }
}