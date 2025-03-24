import { randomBytes } from "node:crypto";
import { bench, describe } from "vitest";

describe("Benchmarks", () => {
    bench("old", async () => {
        randomBytes(16);
    }, {warmupTime: 1000, time: 5000});
    bench("new", async () => {
        randomBytes(64);
    }, {warmupTime: 1000, time: 5000});
});
