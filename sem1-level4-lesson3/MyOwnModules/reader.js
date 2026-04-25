const fs = require("fs");

function myReader(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log(data);
  });
}

function mySyncReader(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  console.log("Sync read data:", data);
}
module.exports = {
  myReader,
  mySyncReader,
};
