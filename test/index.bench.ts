import { bench, describe } from "vitest";

// biome-ignore lint/correctness/noUnusedVariables: use as needed
const noop = (..._args: unknown[]) => {};

describe("Benchmarks", () => {
    bench(
        "old",
        () => {
            for (let i = 0; i < 10000; i++) {
                Math.random() * 1000;
            }
        },
        { warmupTime: 1000, time: 5000 },
    );
    bench(
        "new",
        () => {
            for (let i = 0; i < 10000; i++) {
                Math.random() * 10000;
            }
        },
        { warmupTime: 1000, time: 5000 },
    );
});
