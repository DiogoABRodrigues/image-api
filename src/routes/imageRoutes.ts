import { Router } from 'express';
import { generateImage } from '../controllers/imageController';

const router = Router();

// Route to generate an image with text
router.post('/generate', generateImage);

export default router;
