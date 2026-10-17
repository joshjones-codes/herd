import type { OAuthStorage } from "@mastra/mcp";

class Storage implements OAuthStorage {
    private data: Map<string, string>;

    constructor() {
        this.data = new Map<string, string>();
    }

    set(key: string, value: string): void {
        this.data.set(key, value);
    }

    get(key: string): string | undefined {
        return this.data.get(key);
    }

    delete(key: string): void {
        this.data.delete(key);
    }
};

export const storage = new Storage();