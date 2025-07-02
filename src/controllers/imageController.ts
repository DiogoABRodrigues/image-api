import { Request, Response } from 'express';
import { createImageWithText } from '../services/imageService';
import fs from 'fs';

/**
 * Generates an image with the provided text and sends it as a response.
 * If the text is not provided, it returns a 400 error.
 * @param req 
 * @param res 
 */
export const generateImage = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { text } = req.body;

    if (!text) {
      res.status(400).json({ error: 'Text is required' });
    }

    const filename = `image-${Date.now()}.png`;
    // Create the image with the provided text
    const imagePath = await createImageWithText(text, filename);
    // Read the image file and send it in the response
    const imageBuffer = await fs.promises.readFile(imagePath);
    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Error generating image' });
  }
};
