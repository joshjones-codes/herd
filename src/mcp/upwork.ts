import { MCPClient, MCPOAuthClientProvider } from "@mastra/mcp";
import { readFileSync } from "node:fs";
import { storage } from "./factories/storage.ts";
import { execFile } from "node:child_process";

const clientInformation = JSON.parse(
    readFileSync(".auth/upwork-client.json", "utf8")
)

const redirectUrl = "http:localhost:3000/callback";

const oauthProvider = new MCPOAuthClientProvider({
    redirectUrl,
    clientInformation,
    clientMetadata: {
        client_name: "herd",
        redirect_uris: [redirectUrl],
        grant_types: ["authorization_code", "referesh_tokens"],
        response_types: ["code"],
        token_endpoint_auth_method: "nonde",
    },
    onRedirectToAuthorization: async (url) => {
        console.log("authorize Herd:", url.href)
        execFile("open", [url.href])
        // console.log(await oauthProvider.discoveryState());

        // console.log(await oauthProvider.codeVerifier());
    },
    storage,
})



export const upworkMcp = new MCPClient({
    id: "upwork",
    servers: {
        upwork: {
            url: new URL("https://mcp.upwork.com/mcp"),
            authProvider: oauthProvider,
        },
    }
});

