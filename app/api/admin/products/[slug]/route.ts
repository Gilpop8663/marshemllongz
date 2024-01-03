import { NextRequest, NextResponse } from 'next/server';
import { CreateProduct, modifyProduct } from '@backend/api/admin/products';

export async function PUT(request: NextRequest, { params }: { params: { slug: string } }) {
  const productRequest: CreateProduct = await request.json();

  const slug = Number(params.slug);

  try {
    await modifyProduct({ id: slug, ...productRequest });

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
