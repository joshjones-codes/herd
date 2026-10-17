import { createTool } from "@mastra/core/tools";
import { z } from "zod";

export const searchContracts = createTool({
    id: "search-contracts",
    "description": "Search for freelance engineering contracts",

    inputSchema: z.object({
        query: z.string(),
    }),

    outputSchema: z.array(
        z.object({
            title: z.string(),
            hourlyRate: z.number(),
        })
    ),

    execute: async ({ query }) => {
        console.log("Searching contracts for:", query);

        return [
            {
                title: "TypeScript Backend Engineer",
                hourlyRate: 85,
            }
        ]
    }
});