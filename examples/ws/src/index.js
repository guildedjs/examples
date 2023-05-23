require("dotenv/config");

const { WebSocketManager } = require("@guildedjs/api");

if (!process.env.TOKEN) throw new Error("Missing token!");
const ws = new WebSocketManager({ token: process.env.TOKEN });

ws.emitter.on("gatewayEvent", (event, data) => {
    switch (event) {
        case "ChatMessageCreated":
            if (["heck", "dang"].some((x) => data.d.message.content.includes(x))) console.log("No bad words!!!");
    }
});

ws.emitter.on("error", console.log);
// ws.emitter.on("debug", console.log);
ws.emitter.on("ready", () => console.log("WS is ready to receive events!"));

ws.connect();
