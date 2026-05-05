import { useState } from 'react'
import './App.css'

function App() {
  const [analysisType, setAnalysisType] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [parameters, setParameters] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (<div className="app"></div>)
}

export default App
