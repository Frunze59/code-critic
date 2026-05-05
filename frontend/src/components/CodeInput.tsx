interface CodeInputProps {
    code: string;
    setCode: (value: string) => void;
}

function CodeInput({ code, setCode }: CodeInputProps) {
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => setCode(event.target?.result as string);
            reader.readAsText(file);
        }
    };

    return (
        <div className="code-input">
            <h2>Code Input</h2>
            <input type="file" onChange={handleFileUpload} />
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste your code here..."
                rows={20}
            />
        </div>
    );
}

export default CodeInput;