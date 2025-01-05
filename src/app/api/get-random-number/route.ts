import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: NextRequest) {
    console.log('Hello from the serverless function')

    return NextResponse.json({
        hello: 'Geeks For Geeks',
    })
}
