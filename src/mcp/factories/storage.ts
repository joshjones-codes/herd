import type { OAuthStorage } from "@mastra/mcp";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

class Storage implements OAuthStorage {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    private read(): Record<string, string> {
        if (!existsSync(this.filePath)) {
            return {};
        }

        return JSON.parse(readFileSync(this.filePath, "utf-8"))
    }

    private write(data: Record<string, string>): void {
        writeFileSync(this.filePath, JSON.stringify(data, null, 2), {
            mode: 0o600,
        })
    }

    set(key: string, value: string): void {
        const data = this.read();
        data[key] = value;
        this.write(data);
    }

    get(key: string): string | undefined {
        return this.read()[key];
    }

    delete(key: string): void {
        const data = this.read();
        delete data[key];
        this.write(data);
    }
};

export const storage = new Storage(".auth/upwork-oauth.json");