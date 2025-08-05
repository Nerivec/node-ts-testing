let buf = Buffer.alloc(4);

// biome-ignore lint/suspicious/noExplicitAny: ignore
const var1: any = Buffer.from([1, 2, 3, 4]);

if (Buffer.isBuffer(var1)) {
    buf = var1;
}

console.log(buf);
