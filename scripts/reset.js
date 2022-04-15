const { join } = require("path");
const rimraf = require("rimraf");
const BASE_DIR = join(__dirname, "..");

rimraf.sync(join(BASE_DIR, "node_modules"));
console.log("Deleting root node_modules");

["bot", "command-handler", "rest", "ws"].forEach((pkg) => {
    ["node_modules", "dist", "types"].forEach((dir) => {
        console.log(`Deleting package ${pkg} ${dir}`);
        rimraf.sync(join(BASE_DIR, "packages", pkg, dir));
    });
});
