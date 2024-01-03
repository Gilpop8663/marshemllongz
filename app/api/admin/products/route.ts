import { NextRequest, NextResponse } from 'next/server';
import { getAdminCategoryList } from '@backend/api/admin/category';
import { CreateProduct, createProduct } from '@backend/api/admin/products';

export async function GET(request: NextRequest) {
  const categoryList = await getAdminCategoryList();

  return NextResponse.json(categoryList, { status: 200, statusText: 'OK' });
}

export async function POST(request: NextRequest) {
  const productRequest: CreateProduct = await request.json();

  try {
    const result = await createProduct(productRequest);

    return NextResponse.json('', {
      status: 201,
      statusText: 'CREATED',
      headers: {
        Location: `/products/${result.id}`,
      },
    });
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 400, statusText: 'Bad Request' });
    }
  }
}
