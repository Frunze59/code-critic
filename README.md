# Code Critic

A code analysis tool that gives you structured feedback on the quality and security of your code, powered by the Anthropic Claude API.

Paste your code or upload a file, select an analysis type, configure the parameters, and get a detailed report in seconds. Reports can be exported as plain text, Markdown, or HTML.

---

## Stack

**Frontend:** React 19 + TypeScript + Vite  
**Backend:** Node.js + Express + TypeScript  
**AI:** Anthropic Claude (claude-haiku)  
**Containerization:** Docker + Docker Compose  

---

## Setup

### Requirements

- [Docker](https://www.docker.com/) (only requirement)

### Run with Docker

1. Clone the repository:

```bash
git clone https://gitea.kood.tech/sergiufrunze/code-critic
cd code-critic
```

2. Add your Anthropic API key to `backend/.env`:

```bash
echo "ANTHROPIC_API_KEY=your_key_here" > backend/.env
```

3. Start the app:

```bash
docker compose up --build
```

4. Open [http://localhost](http://localhost) in your browser.

---

### Run locally (development)

**Backend:**

```bash
cd backend
npm install
echo "ANTHROPIC_API_KEY=your_key_here" > .env
npm run dev
```

**Frontend** (in a separate terminal):

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Usage

1. **Select analysis type** — choose between Quality or Security analysis
2. **Input your code** — paste directly or upload a file (100–500 lines recommended)
3. **Set parameters** — configure strictness, naming conventions, or security framework
4. **Click Analyse Code** — the AI analyzes your code and returns a structured report
5. **Review results** — read the findings, scores, and recommendations
6. **Export** — download the report as Plain Text, Markdown, or HTML

---

## Analysis Types

### Quality
Evaluates readability, complexity metrics, and best practice violations.  
Parameters: strictness level, naming conventions, code organization.

### Security
Identifies vulnerabilities, risk ratings, and remediation suggestions.  
Parameters: security framework (OWASP/SANS/NIST), severity threshold, vulnerability categories.

---

## Project Structure

```
code-critic/
├── backend/
│   ├── src/
│   │   ├── processors/     # Input normalization and output post-processing
│   │   ├── prompts/        # Prompt templates and dispatcher
│   │   ├── services/       # Anthropic API client
│   │   ├── routes/         # Express route handlers
│   │   └── index.ts        # Server entry point
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/     # AnalysisTypeSelector, CodeInput, ParametersForm, ResultsViewer, ExportPanel
│   │   ├── App.tsx
│   │   └── types.ts
│   └── Dockerfile
└── docker-compose.yml
```
