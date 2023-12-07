/**
 * @jest-environment node
 */

import { NextRequest, NextResponse } from 'next/server';
import { createMocks, createRequest, createResponse } from 'node-mocks-http';
import { prismaMock } from 'singleton';
import { PUT } from '@app/admin/categories/[slug]/route';
import { POST } from '@app/admin/categories/route';

const CATEGORY_INFO = {
  name: '반창고',
  description: '반창고 카테고리',
};

const CATEGORY_INFO_RESULT = {
  id: 1,
  name: '반창고',
  description: '반창고 카테고리',
  isVisible: true,
};

type ApiRequest = NextRequest & ReturnType<typeof createRequest>;
type APiResponse = NextResponse & ReturnType<typeof createResponse>;

describe('카테고리 등록 api를 호출한다.', () => {
  beforeEach(() => {
    prismaMock.recipeCategory.create.mockResolvedValue(CATEGORY_INFO_RESULT);
  });

  it('카테고리 등록을 한다.', async () => {
    const { req } = createMocks<ApiRequest, APiResponse>({
      method: 'POST',
      json: () => CATEGORY_INFO,
    });

    const response = await POST(req);

    if (!response) return;

    expect(response.status).toBe(201);
    expect(response.statusText).toBe('CREATED');
    expect(response.headers.get('location')).toBe('/categories/1');
  });

  it('카테고리 등록에 실패한다.', async () => {
    const { req } = createMocks<ApiRequest, APiResponse>({
      method: 'POST',
      json: () => ({ ...CATEGORY_INFO, name: 'dwqjpdfiowqfhpqwfhpqwhfpqwhfiqpwfhwpi' }),
    });

    const response = await POST(req);

    if (!response) return;

    expect(response.status).toBe(400);
    expect(response.statusText).toBe('Bad Request');
  });
});

describe('카테고리 수정 api를 호출한다.', () => {
  beforeEach(() => {
    prismaMock.recipeCategory.update.mockResolvedValue(CATEGORY_INFO_RESULT);
  });

  it('카테고리 수정을 한다.', async () => {
    const { req } = createMocks<ApiRequest, APiResponse>({
      method: 'PUT',
      json: () => ({
        ...CATEGORY_INFO,
        isVisible: true,
      }),
    });

    const response = await PUT(req, { params: { slug: '1' } });

    if (!response) return;

    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
  });

  it('카테고리 수정에 실패한다.', async () => {
    const { req } = createMocks<ApiRequest, APiResponse>({
      method: 'PUT',
      json: () => ({
        ...CATEGORY_INFO,
        name: 'wqpodhjpqwdhjpqwdhpoqwhdpqwhpqowhpwqdpqhd',
        isVisible: true,
      }),
    });

    const response = await PUT(req, { params: { slug: '1' } });

    if (!response) return;

    expect(response.status).toBe(400);
    expect(response.statusText).toBe('Bad Request');
  });
});
