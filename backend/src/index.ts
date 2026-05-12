import express from 'express';
import cors from 'cors';
import analysisRouter from './routes/analysis.js';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = process.env.PORT || 3001;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per window
  message: { error: 'Too many requests, please try again later.' },
});

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:80', 'http://localhost'],
}));
app.use(express.json());

app.use('/api',limiter);

app.use('/api', analysisRouter);

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`);
});

