import request from 'supertest';
import app from '../app';

describe('GET /', () => {
  it('responds with json', async () => {
    const { body } = await request(app)
      .get('/')
      .expect(200);

    expect(body.ok).toBeTruthy();
  });
});
