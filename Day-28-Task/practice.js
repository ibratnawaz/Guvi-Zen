// File System module
let fs = require("fs");

// Creating file
fs.writeFile(`dist/${Date.now()}.txt`, `${new Date}`, (err) => {
    if (err) throw err;
    console.log('The file has been created!');
});

// Appending to the file
fs.appendFile('test.txt', `\nHere's some additional content appended to original file content.`,
    function (err) {
        if (err) throw err;
        console.log('Saved!');
    }
);

// Reading all the files from a particular folder.
fs.readdir('dist', (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
        console.log(file);
        fs.readFile(`dist/${file}`, (err, data) => {
            if (err) throw err;
            console.log(data.toString());
        });
    });
});