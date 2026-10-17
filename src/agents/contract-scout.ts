import { Agent } from "@mastra/core/agent";
import { searchContracts } from "../tools/search-contracts.ts";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const ollama = createOpenAICompatible({
    name: "ollama",
    baseURL: "http://localhost:11434/v1",
    apiKey: "ollama",
});

export const contractScout = new Agent({
    id: "contract-scout",
    name: "Contract Scout",
    instructions: `
       You are an engineering contract research assistant.

        Help identify freelance opportunities involving
        TypeScript, Node.js, React, AWS, and AI integrations.

        Prioritize remote contracts with flexible schedules.
        Explain why each opportunity is a good fit.

        Never invent contract listings.
    `,
    model: ollama.chatModel("qwen3:8b"),
    tools: {
        searchContracts
    }
});
