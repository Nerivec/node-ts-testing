import { randomBytes } from "node:crypto";

let buf = Buffer.alloc(4);

buf = randomBytes(4);

console.log(buf);
