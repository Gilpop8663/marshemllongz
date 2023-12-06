import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { createCategory } from '@backend/api/admin/category';

interface CategoryApiRequest extends NextApiRequest {
  body: {
    name: string;
    description?: string;
  };
}

export async function POST(request: CategoryApiRequest) {
  const { name, description } = request.body;

  try {
    const result = await createCategory({ name, description });

    return NextResponse.json('', {
      status: 201,
      statusText: 'CREATED',
      headers: {
        Location: `/categories/${result.id}`,
      },
    });
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 400, statusText: 'Bad Request' });
    }
  }
}
