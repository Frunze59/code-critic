interface AnalysisTypeSelectorProps {
    analysisType: string;
    setAnalysisType: (value: string) => void;
  }

  function AnalysisTypeSelector({ analysisType, setAnalysisType }: AnalysisTypeSelectorProps) {
    return (
        <div className="analysis-type-selector">
            <h2>Analysis Type</h2>
            <select value={analysisType} onChange={(e) => setAnalysisType(e.target.value)}>
                <option value="">-- Select analysis type --</option>
                <option value="quality">Quality</option>
                <option value="security">Security</option>
            </select>
        </div>
    );
}

export default AnalysisTypeSelector;