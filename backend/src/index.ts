import express from 'express';
import cors from 'cors';
import analysisRouter from './routes/analysis.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:80', 'http://localhost'],
}));
app.use(express.json());

app.use('/api', analysisRouter);

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`);
});

