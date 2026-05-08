interface ResultsViewerProps {
    result: string | null;
}
function ResultsViewer({ result }: ResultsViewerProps) {
    return (
        <div className="results-viewer">
            <h2>Results</h2>
            {result ? (
                <pre>{result}</pre>
            ) : (
                <p>No analysis yet. Submit your code to see results.</p>
            )}
        </div>
    );
}

export default ResultsViewer;