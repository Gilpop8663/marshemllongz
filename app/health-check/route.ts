import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json('health-check', { status: 200, statusText: 'OK' });
}

export async function POST(request: NextRequest) {
  const text = request.body;
  console.log(text);
  return NextResponse.json('health-check', { status: 201, statusText: 'CREATED' });
}
