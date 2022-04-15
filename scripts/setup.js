const { exec } = require("child_process");
const { join } = require("path");

const stdout = (args) => console.log(args);
["pnpm install -r"].forEach((command) => exec(command, { cwd: join(__dirname, "..") }, stdout));
