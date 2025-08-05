let buf = Buffer.alloc(4);

export const testMe = (inBuf: Buffer<ArrayBuffer>): Buffer<ArrayBuffer> => {
    return inBuf.subarray(0, 2);
};

buf = testMe(Buffer.from([1, 2, 3, 4]));

console.log(buf);

export const testMe2 = (dv: DataView): Buffer<ArrayBuffer> => {
    return testMe(dv.buffer);
};
