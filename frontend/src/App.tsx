import logo from './assets/logo.png';
import { useState } from 'react'
import './App.css'
import type { ProcessedOutput } from './types';
import AnalysisTypeSelector from './components/AnalysisTypeSelector';
import CodeInput from './components/CodeInput';
import ParametersForm from './components/ParametersForm';
import ResultsViewer from './components/ResultsViewer';
import ExportPanel from './components/ExportPanel';


function App() {
  const [analysisType, setAnalysisType] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [parameters, setParameters] = useState<Record<string, string>>({});
  const [result, setResult] = useState<ProcessedOutput | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          analysis_type: analysisType,
          code_input: code,
          parameters: parameters
        })
      });
      const data: ProcessedOutput = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
    <div className="app-header">
      <img src={logo} alt="Code Critic logo" className="logo" />
      <h1>Code Critic</h1>
    </div>
      <AnalysisTypeSelector analysisType={analysisType} setAnalysisType={setAnalysisType} />
      <CodeInput code={code} setCode={setCode} />
      <ParametersForm analysisType={analysisType} parameters={parameters} setParameters={setParameters} />
      <button className="submit-btn" onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Analysing...' : 'Analyse Code'}
      </button>
      <ResultsViewer result={result?.content ?? null} />
      <ExportPanel result={result} isLoading={isLoading} />
    </div>
  );
}

export default App
