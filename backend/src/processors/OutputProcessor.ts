import { marked } from 'marked';

export interface ProcessedOutput {
    content: string;
    export_formats: {
      plain_text: string;
      markdown: string;
      html: string;
    };
    metadata: {
      analysis_type: string;
      language: string;
      analysis_time: string;
    };
  }

  function toPlainText(text: string): string {
    return text
      .replace(/#+/g, '')
      .replace(/\*+/g, '')
      .replace(/`+/g, '')
      .trim();
  }

  function cleanMarkdown(text: string): string {
    return text
      .replace(/As an AI[^.]*\./g, '')
      .trim();
  }

  function processOutput(output: string, analysis_type: string, language: string, analysis_time: string): ProcessedOutput {
    return {
        content: output,
        metadata: {
            analysis_type: analysis_type,
            language: language,
            analysis_time: analysis_time,
        },
        export_formats: {
            plain_text: toPlainText(output),
            markdown: cleanMarkdown(output),
            html: marked(output) as string,
        },
    };
}


export { processOutput };