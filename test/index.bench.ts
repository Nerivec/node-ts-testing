import { randomBytes } from "node:crypto";
import { bench, describe } from "vitest";

describe("Benchmarks", () => {
	bench("old", async () => {
		randomBytes(16);
	});
	bench("new", async () => {
		randomBytes(64);
	});
});
