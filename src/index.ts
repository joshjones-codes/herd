import "dotenv/config";
import { contractScout } from "./agents/contract-scout.ts";

async function main() {
    const response = await contractScout.generate(
        "What kinds of freelance contracts should I target?"
    );

    console.log(response.text);
    console.dir(response.toolCalls, { depth: null });
    console.dir(response.toolResults, { depth: null });
}

main().catch(console.error);