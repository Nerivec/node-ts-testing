import { bench, describe } from "vitest";

// biome-ignore lint/correctness/noUnusedVariables: use as needed
const noop = (..._args: unknown[]) => {};

describe("Benchmarks", () => {
    bench(
        "old",
        () => {
            const o1: Record<string, number> = { a: 1, b: 2, c: 3 };

            for (let i = 0; i < 100; i++) {
                noop(o1.b); // get
                o1.a = 99; // set
                o1.d = 98; // add
                // biome-ignore lint/performance/noDelete: test
                delete o1.d; // delete
            }
        },
        { warmupTime: 1000, time: 5000 },
    );
    bench(
        "new",
        () => {
            const m1 = new Map([
                ["a", 1],
                ["b", 2],
                ["c", 3],
            ]);

            for (let i = 0; i < 100; i++) {
                noop(m1.get("b")); // get
                m1.set("a", 99); // set
                m1.set("d", 98); // add
                m1.delete("d"); // delete
            }
        },
        { warmupTime: 1000, time: 5000 },
    );
});
