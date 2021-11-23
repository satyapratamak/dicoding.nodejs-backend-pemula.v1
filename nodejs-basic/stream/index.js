/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */


const fs = require('fs');

const fs_write = require('fs');

const writableStream = fs_write.createWriteStream('./stream/output.txt');

const readableStream = fs.createReadStream('./stream/input.txt', {
    highWaterMark: 15
});

readableStream.on('readable', () => {
    try {
        writableStream.write(`[${readableStream.read()}] \n`);
    } catch (error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    console.log('Done');
});