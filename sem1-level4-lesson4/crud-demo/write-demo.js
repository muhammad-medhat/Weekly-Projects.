const fs = require("fs");

const data = fs.writeFile("data.txt", "Hello, World!", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("Data written to file successfully.");
  }
});
module.exports = data;
