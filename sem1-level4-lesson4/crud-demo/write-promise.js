const fsp = require("fs/promises");

async function main() {
  try {
    await fsp.writeFile("data-promise.txt", "Hello, World with Promises!");
    console.log("Data written with promises to file successfully.");
  } catch (err) {
    console.error("Error writing to file:", err);
  }
}
main();
