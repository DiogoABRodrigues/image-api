import express from 'express';
import imageRoutes from './routes/imageRoutes';

const app = express();

app.use(express.json());
// Middleware to handle JSON requests
app.use('/images', imageRoutes);

export default app;
