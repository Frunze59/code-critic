import type { ProcessedOutput } from '../types';

interface ExportPanelProps {
    result: ProcessedOutput | null;
    isLoading: boolean;
}

function ExportPanel({ result, isLoading }: ExportPanelProps) {
    const handleDownload = (content: string, filename: string) => {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }
    return (
        <div className="export-panel">
            <h2>Export</h2>
            <button
            disabled={!result || isLoading}
            onClick={() => result && handleDownload(result.export_formats.plain_text, 'analysis.txt')}
            >
            Export as Plain Text
            </button>
            <button
                disabled={!result || isLoading}
                onClick={() => result && handleDownload(result.export_formats.markdown, 'analysis.md')}
            >
                Export as Markdown
            </button>
            <button
                disabled={!result || isLoading}
                onClick={() => result && handleDownload(result.export_formats.html, 'analysis.html')}
            >
                Export as HTML
            </button>
        </div>
    );
}

export default ExportPanel;