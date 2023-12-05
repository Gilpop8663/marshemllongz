/**
 * @jest-environment node
 */

import { createRequest } from 'node-mocks-http';
import { GET } from '@app/health-check/route';

describe('서버의 상태를 확인한다.', () => {
  it('health-check api를 호출한다.', async () => {
    const { req } = createRequest({ method: 'GET' });

    const response = await GET(req);

    expect(await response.json()).toBe('health-check');
    expect(response.status).toBe(200);
  });
});
