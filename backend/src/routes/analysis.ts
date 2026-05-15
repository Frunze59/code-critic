import { processInput } from '../processors/InputProcessor.js';
import { analysis_type_dispatcher } from '../prompts/promptBuilder.js';
import { callAnthropicAPI } from '../services/anthropic.js';
import { processOutput } from '../processors/OutputProcessor.js';
import { Router } from 'express';

const router = Router();

router.post('/analyze', async (req, res) => {
    try {
      const normalizedInput = processInput(req.body);
      const prompt = analysis_type_dispatcher(normalizedInput);
      const output = await callAnthropicAPI(prompt);
      const processedOutput = processOutput(output, normalizedInput.analysis_type, normalizedInput.code.language, 'unknown');
      res.json(processedOutput);
    } catch (error: unknown) {
      console.error('Analysis error:', error);
      const message = (error as Error).message;
      const isValidationError = message.includes('required') || message.includes('lines');
      res.status(isValidationError ? 400 : 500).json({ error: 'Analysis failed', message });
    }
  });

export default router;