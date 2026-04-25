const fs = require("fs");
const path = require("path");
// fs.writeFile(path.join(__dirname, "file.txt"), "Hello World", (err) => {
//   if (err) throw err;
//   console.log("File created successfully");
// });
/************************************** */
// const dtSync = fs.readFileSync("file.txt", "utf8");
// console.log("reading file sync...", dtSync);
const dt = fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  return data;
});
console.log("reading file", dt);

console.log("Done...");

console.log("platform:", process.platform);
