import { NextRequest, NextResponse } from 'next/server';
import { modifyCategory } from '@backend/api/admin/category';

export async function PUT(request: NextRequest, { params }: { params: { slug: string } }) {
  const { name, description, isVisible } = await request.json();

  const slug = Number(params.slug);

  try {
    await modifyCategory({ id: slug, name, description, isVisible });

    return NextResponse.json({
      status: 200,
      statusText: 'OK',
    });
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 400, statusText: 'Bad Request' });
    }
  }
}
