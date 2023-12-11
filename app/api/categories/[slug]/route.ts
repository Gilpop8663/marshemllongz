import { NextRequest, NextResponse } from 'next/server';
import { getCategoryDetail } from '@backend/api/categories';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const slug = Number(params.slug);

  try {
    const categoryDetail = await getCategoryDetail(slug);

    return NextResponse.json(categoryDetail, {
      status: 200,
      statusText: 'OK',
    });
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 400, statusText: 'Bad Request' });
    }
  }
}
