const request = require("request");
const fs = require("fs");
const args = process.argv;

// console.log(process.argv);
let url = args[2];
let fileName = args[3];

const fetch = function(url) {
  console.log("Calling readFile...");
  content = request(url, (error, response, body) => {
    write(fileName, body);
  });
};

const write = function(fileName, content) {
  fs.writeFile(fileName, content, err => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log(`Downloaded and saved ${content.length} bytes to ${fileName}.`);
  });
};

fetch(url);
