import path from "path";
import { syncReader, asyncReader } from "./reader.js";
import chalk from "chalk";
const filePath = path.resolve("file.txt");
console.log(chalk.green("Starting..."));
const syncData = syncReader(filePath);
const asyncData = asyncReader(filePath);
console.log(chalk.green("End..."));
