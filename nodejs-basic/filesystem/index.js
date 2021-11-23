const fs = require('fs');
const path = require('path');

const fileReadCallback = (error, data) => {
    if (error) {
        //console.log('Gagal membaca berkas');
        console.log(error);
        return;
    }
    console.log(data);
};

path.resolve(__dirname, 'notes.txt');

//fs.readFile('./filesystem/notes.txt', 'UTF-8', fileReadCallback);
fs.readFile(__dirname + '/notes.txt', 'UTF-8', fileReadCallback);