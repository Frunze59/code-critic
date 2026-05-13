import type { NormalizedInput } from '../processors/InputProcessor.js';

function getDepthInstruction(lineCount: number): string {
  if (lineCount < 200) {
    return 'Provide a concise, focused analysis highlighting the most important issues only.';
  }
  return 'Provide a thorough, in-depth analysis covering all aspects of the code in detail.';
}

function buildQualityPrompt(input: NormalizedInput): string {
  return `
You are an expert code reviewer specializing in ${input.code.language} code quality analysis.

Analyze the following ${input.code.language} code with ${input.parameters.strictness_level || 'medium'} strictness.

Code to analyze:
\`\`\`${input.code.language}
${input.code.content}
\`\`\`

${getDepthInstruction(input.code.line_count)}

Analysis requirements:
- Strictness level: ${input.parameters.strictness_level || 'medium'}
- Naming conventions: ${input.parameters.naming_conventions || 'standard'}
- Code organization: ${input.parameters.code_organization || 'any'}

Here is an example of a good analysis response:

## Readability Score
8/10 - The code is well-structured with clear variable names. Minor issues with inline comments.

## Complexity Metrics
- Cyclomatic Complexity: 3 - Low complexity, easy to follow
- Cognitive Complexity: 4 - Simple logic with minimal nesting

## Best Practice Violations
1. **Line 12: Missing return type annotation**
   - Type: Type Safety
   - Severity: Low
   - Suggestion: Add explicit return type for clarity

Now analyze the provided code following this exact format.

Provide your response in the following format:
## Readability Score
[score out of 10 with explanation]

## Complexity Metrics
[cyclomatic and cognitive complexity]

## Best Practice Violations
[list each violation with line number, type, and suggestion]
`;
}

function buildSecurityPrompt(input: NormalizedInput): string {
    return `
You are an expert code reviewer specializing in ${input.code.language} code security analysis.

Analyze the following ${input.code.language} code with ${input.parameters.strictness_level || 'medium'} strictness.

Code to analyze:
\`\`\`${input.code.language}
${input.code.content}
\`\`\`

${getDepthInstruction(input.code.line_count)}

Analysis requirements:
- Security framework: ${input.parameters.security_framework || 'OWASP'}
- Severity threshold: ${input.parameters.severity_threshold || 'medium'}
- Vulnerability categories: ${input.parameters.vulnerability_categories || 'all'}

Provide your response in the following format:
## Vulnerability Report
[list each vulnerability with type, line number, and risk rating]

## Risk Rating
[overall risk assessment: high, medium, low]

## Remediation Suggestions
[specific fix for each vulnerability found]
`;
}

function analysis_type_dispatcher(input: NormalizedInput): string {
    switch (input.analysis_type) {
        case 'quality':
          return buildQualityPrompt(input);
        case 'security':
          return buildSecurityPrompt(input);
        default:
          throw new Error(`Unsupported analysis type: ${input.analysis_type}`);
      }
    }
export { buildQualityPrompt, buildSecurityPrompt, analysis_type_dispatcher };
