const AI_REFERRER_RULES = [
  { label: "bing-copilot", pattern: /bing\.com|copilot\.microsoft\.com/i },
  { label: "chatgpt", pattern: /chatgpt\.com|chat\.openai\.com/i },
  { label: "perplexity", pattern: /perplexity\.ai/i },
  { label: "gemini", pattern: /gemini\.google\.com/i },
  { label: "claude", pattern: /claude\.ai/i },
] as const;

export type AiReferrerLabel = (typeof AI_REFERRER_RULES)[number]["label"] | "other-ai" | "non-ai";

export function classifyAiReferrer(referrer: string | null | undefined): AiReferrerLabel {
  if (!referrer) {
    return "non-ai";
  }

  for (const rule of AI_REFERRER_RULES) {
    if (rule.pattern.test(referrer)) {
      return rule.label;
    }
  }

  if (/\.ai|ai-search|llm/i.test(referrer)) {
    return "other-ai";
  }

  return "non-ai";
}
