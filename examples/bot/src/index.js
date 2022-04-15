require("dotenv/config");

const { Client } = require("guilded.js");
const client = new Client({ token: process.env.TOKEN });
const prefix = process.env.PREFIX;

client.on("memberJoined", console.log);
client.on("memberRemoved", console.log);
client.on("memberUpdated", console.log);

client.on("messageCreated", async (m) => {
    if (m.createdByBotId || !m.content.startsWith(prefix)) return;
    const [commandName, ...args] = m.content.slice(prefix.length).split(" ");
    switch (commandName) {
        case "test": {
            await m.send("TESTING!");
            break;
        }
        case "echo": {
            await m.send(args.join(" "));
            break;
        }
    }
});

// client.on("debug", console.log);
client.on("error", console.log);
client.on("ready", () => console.log("Guilded bot is ready!"));
client.on("exit", () => console.log("Disconnected!"));

client.login();
