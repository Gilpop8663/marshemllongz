import { NextRequest, NextResponse } from 'next/server';
import { getCategoryList } from '@backend/api/categories';

export async function GET(request: NextRequest) {
  const categoryList = await getCategoryList();

  return NextResponse.json(categoryList, { status: 200, statusText: 'OK' });
}
