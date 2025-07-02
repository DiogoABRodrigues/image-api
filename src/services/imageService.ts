import { createCanvas } from 'canvas';
import path from 'path';
import fs from 'fs';


// Function to create an image with text and save it to a file
export const createImageWithText = async (text: string, filename: string): Promise<string> => {
  const width = 400;
  const height = 200;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // white background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, width, height);

  // black text
  ctx.fillStyle = '#000000';
  ctx.font = '30px Arial';
  ctx.fillText(text, 50, 100);

  // make sure the images directory exists
  const imagesDir = path.resolve(__dirname, '../../images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // path
  const filePath = path.join(imagesDir, filename);

  // export the canvas to a buffer
  const buffer = canvas.toBuffer('image/png');

  // save the buffer to a file
  await fs.promises.writeFile(filePath, buffer);

  return filePath;
};
