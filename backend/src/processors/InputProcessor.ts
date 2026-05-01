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