import hljs from 'highlight.js';

interface NormalizedInput {
  analysis_type: string;
  code: {
    content: string;
    language: string;
    line_count: number;
    file_name: string;
  };
  parameters: Record<string, string>;
  generation_params: {
    temperature: number;
    max_tokens: number;
  };
}

function processInput(rawInput: any): NormalizedInput {
  if (!rawInput.analysis_type) {
    throw new Error('analysis_type is required');
  }
  if (!rawInput.code_input) {
    throw new Error('Code input is required');
  }
  const detected = hljs.highlightAuto(rawInput.code_input);
  return {
    analysis_type: rawInput.analysis_type,
    code: {
      content: rawInput.code_input,
      language: detected.language || 'unknown',
      line_count: rawInput.code_input.split('\n').length,
      file_name: rawInput.file_name || 'unnamed',
    },
    parameters: rawInput.parameters || {},
    generation_params: {
      temperature: 0.3,
      max_tokens: 1500,
    },
  };
}

export { processInput };
export type { NormalizedInput };
