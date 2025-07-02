import request from 'supertest';
import express from 'express';
import imageRoutes from '../routes/imageRoutes';

const app = express();
app.use(express.json());
app.use('/api/images', imageRoutes);

describe('POST /api/images/generate', () => {
  it('should return 400 if no text is sent', async () => {
    const res = await request(app).post('/api/images/generate').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Text is required');
  });

  it('should return a PNG image when text is provided', async () => {
    const res = await request(app)
      .post('/api/images/generate')
      .send({ text: 'Test Image' });

    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toBe('image/png');
    expect(res.body).toBeInstanceOf(Buffer);
  });
});
