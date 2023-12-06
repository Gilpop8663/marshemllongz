/**
 * @jest-environment node
 */

import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, createRequest, createResponse } from 'node-mocks-http';
import { GET, POST } from '@app/health-check/route';

type ApiRequest = NextApiRequest & ReturnType<typeof createRequest>;
type APiResponse = NextApiResponse & ReturnType<typeof createResponse>;

describe('서버의 상태를 확인한다.', () => {
  it('health-check api를 호출한다.', async () => {
    const { req } = createMocks<ApiRequest, APiResponse>({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await GET(req);

    expect(await response.json()).toBe('health-check');
    expect(response.status).toBe(200);
    expect(response.statusText).toBe('OK');
  });

  it('health-check api POST를 호출한다.', async () => {
    const { req } = createMocks<ApiRequest, APiResponse>({
      method: 'POST',
      body: {
        name: 'Add your name in the body',
      },
    });

    const response = await POST(req);

    expect(await response.json()).toBe('Add your name in the body');
    expect(response.status).toBe(201);
    expect(response.statusText).toBe('CREATED');
  });
});
