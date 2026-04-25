import fs from "fs";
import chalk from "chalk";

export function asyncReader(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log(chalk.blue("Asynchronous (Non-blocking)"), data);
  });
}

export function syncReader(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  console.log(chalk.blue("Synchronous (Blocking)"), data);
  // return data;
}
