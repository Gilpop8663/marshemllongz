import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export async function GET(request: NextApiRequest) {
  return NextResponse.json('health-check', { status: 200, statusText: 'OK' });
}

interface HealthRequest extends NextApiRequest {
  body: {
    name: string;
  };
}

export async function POST(request: HealthRequest) {
  const { name } = request.body;

  return NextResponse.json(name, { status: 201, statusText: 'CREATED' });
}
