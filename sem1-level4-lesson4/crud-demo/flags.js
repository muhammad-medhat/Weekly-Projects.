const fs = require("fs");

fs.writeFile(
  "log.txt",
  "Start log...\n",
  { flag: "a", encoding: "utf8" },
  (err) => {
    if (err) throw err;

    console.log("Appended to log.txt safely");
  },
);
