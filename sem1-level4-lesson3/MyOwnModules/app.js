const reader = require("./reader");
const path = require("path");

const filePath = path.join(__dirname, "../file.txt");
console.log(filePath);
console.log("Start...");
reader.myReader(filePath);
reader.mySyncReader(filePath);

console.log("Done...");
