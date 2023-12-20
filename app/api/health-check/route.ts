import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json('health-check', { status: 200, statusText: 'OK' });
}

interface HealthRequest {
  name: string;
}

export async function POST(request: NextRequest) {
  const { name }: HealthRequest = await request.json();

  return NextResponse.json(name, { status: 201, statusText: 'CREATED' });
}
