import { upworkMcp } from "./upwork.ts";

try {
    await upworkMcp.authenticate("upwork");

    const tools = await upworkMcp.listTools();

    console.log(Object.keys(tools));
} catch (error) {
    console.error("Upwork MCP error:", error);
} finally {
    await upworkMcp.disconnect();
}