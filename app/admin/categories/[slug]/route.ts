import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { modifyCategory } from '@backend/api/admin/category';

interface CategoryRequest extends NextApiRequest {
  body: {
    name: string;
    description?: string;
    isVisible: boolean;
  };
}

export async function PUT(request: CategoryRequest, { params }: { params: { slug: string } }) {
  const { name, description, isVisible } = request.body;

  const slug = Number(params.slug);

  try {
    await modifyCategory({ id: slug, name, description, isVisible });

    return NextResponse.json('', {
      status: 200,
      statusText: 'OK',
    });
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 400, statusText: 'Bad Request' });
    }
  }
}
