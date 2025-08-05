let buf = Buffer.alloc(4);

const testMe = (inBuf: Buffer): Buffer => {
    return inBuf.subarray(0, 2);
};

buf = testMe(Buffer.from([1, 2, 3, 4]));

console.log(buf);
