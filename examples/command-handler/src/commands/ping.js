module.exports = {
    aliases: ["ping"],
    execute: (msg) => msg.send(msg.channelId, "pong!"),
    name: "ping",
};
