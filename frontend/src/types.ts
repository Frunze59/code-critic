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