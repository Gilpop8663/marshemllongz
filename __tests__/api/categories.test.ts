/**
 * @jest-environment node
 */

import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, createRequest, createResponse } from 'node-mocks-http';
import { prismaMock } from 'singleton';
import { GET } from '@app/categories/route';

type ApiRequest = NextApiRequest & ReturnType<typeof createRequest>;
type APiResponse = NextApiResponse & ReturnType<typeof createResponse>;

const CATEGORY_INFO_RESULT = [
  {
    id: 1,
    isVisible: true,
    name: '스티커/마스킹테이프',
    description: '다들 마스킹테이프 필요하지 않으세요?',
  },
  {
    id: 2,
    isVisible: true,
    name: '호랑이',
    description: '다들 마스킹테이프 필요하지 않으세요?',
  },
];

const result = [
  {
    id: 1,
    name: '스티커/마스킹테이프',
    description: '다들 마스킹테이프 필요하지 않으세요?',
    quantity: 0,
  },
  {
    id: 2,
    name: '호랑이',
    description: '다들 마스킹테이프 필요하지 않으세요?',
    quantity: 0,
  },
];

describe('비회원 카테고리 목록 조회를 한다.', () => {
  beforeEach(() => {
    prismaMock.recipeCategory.findMany.mockResolvedValue(CATEGORY_INFO_RESULT);
  });

  test('비회원 카테고리 목록 조회 api를 호출한다.', async () => {
    const { req } = createMocks<ApiRequest, APiResponse>({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await GET(req);

    expect(await response.json()).toEqual(result);
    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
  });
});
