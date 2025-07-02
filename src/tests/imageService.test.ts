import fs from 'fs';
import path from 'path';
import { createImageWithText } from '../services/imageService';

describe('createImageWithText', () => {
  const testText = 'Hello Test';
  const filename = 'test-image.png';
  const imagesDir = path.resolve(__dirname, '../../images');
  const filepath = path.join(imagesDir, filename);

  afterAll(async () => {
    // Remove a imagem criada no teste
    if (fs.existsSync(filepath)) {
      await fs.promises.unlink(filepath);
    }
  });

  it('should create an image file and return its path', async () => {
    const result = await createImageWithText(testText, filename);

    expect(result).toBe(filepath);
    expect(fs.existsSync(filepath)).toBe(true);

    const stats = await fs.promises.stat(filepath);
    expect(stats.size).toBeGreaterThan(0);
  });
});
