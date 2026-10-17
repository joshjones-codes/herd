import { upworkMcp } from "./upwork.ts";

let tools;

try {
    tools = await upworkMcp.listTools();

    if (Object.keys(tools).length === 0) {
        console.log("No tools discovered. Attempting authentication...");

        await upworkMcp.authenticate("upwork");

        tools = await upworkMcp.listTools();
    }

    console.log(Object.keys(tools));
} catch (error) {
    console.error("Upwork MCP error:", error);
} finally {
    await upworkMcp.disconnect();
}