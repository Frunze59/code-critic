interface ParametersFormProps {
    analysisType: string;
    parameters: Record<string, string>;
    setParameters: (value: Record<string, string>) => void;
}

function ParametersForm({ analysisType, parameters, setParameters }: ParametersFormProps) {
    const handleChange = (key: string, value: string) => {
        setParameters({ ...parameters, [key]: value });
    };

    if (analysisType === 'quality') {
        return (
            <div className="parameters-form">
                <h2>Quality Parameters</h2>
                <label>
                    Strictness Level
                    <select value={parameters.strictness_level || 'medium'} onChange={(e) => handleChange('strictness_level', e.target.value)}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>
                <label>
                    Naming Conventions
                    <select value={parameters.naming_conventions || 'standard'} onChange={(e) => handleChange('naming_conventions', e.target.value)}>
                        <option value="snake_case">snake_case</option>
                        <option value="camelCase">camelCase</option>
                        <option value="standard">Standard</option>
                    </select>
                </label>
                <label>
                    Code Organization
                    <select value={parameters.code_organization || 'any'} onChange={(e) => handleChange('code_organization', e.target.value)}>
                        <option value="functional">Functional</option>
                        <option value="oop">OOP</option>
                        <option value="any">Any</option>
                    </select>
                </label>
            </div>
        );
    }

    if (analysisType === 'security') {
        return (
            <div className="parameters-form">
                <h2>Security Parameters</h2>
                <label>
                    Security Framework
                    <select value={parameters.security_framework || 'OWASP'} onChange={(e) => handleChange('security_framework', e.target.value)}>
                        <option value="OWASP">OWASP</option>
                        <option value="SANS">SANS</option>
                        <option value="NIST">NIST</option>
                    </select>
                </label>
                <label>
                    Severity Threshold
                    <select value={parameters.severity_threshold || 'medium'} onChange={(e) => handleChange('severity_threshold', e.target.value)}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>
                <label>
                    Vulnerability Categories
                    <select value={parameters.vulnerability_categories || 'all'} onChange={(e) => handleChange('vulnerability_categories', e.target.value)}>
                        <option value="all">All</option>
                        <option value="injection">Injection</option>
                        <option value="auth">Authentication</option>
                        <option value="xss">XSS</option>
                    </select>
                </label>
            </div>
        );
    }

    return <div className="parameters-form"><p>Select an analysis type first.</p></div>;
}

export default ParametersForm;
