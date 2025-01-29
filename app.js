// require("dotenv").config("./.env");

const NODE_ENV = "apples"; // Hardcoded secret
console.log("Hardcoded NODE_ENV:", NODE_ENV);

const http = require("http"); // Fix module import
const hostname = "127.0.0.1";
const port = 3000;

const fs = require("fs");
let directory_name = "./";

const server = http.createServer((req, res) => {
    let f = "";
    // For simplicity, simulate file list
    const filenames = ["file1.txt", "file2.txt", "file3.txt"];
    filenames.forEach((file) => {
        f = f + file + " \n";
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(f);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
