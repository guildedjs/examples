require("dotenv/config");

const { RestManager } = require("@guildedjs/rest");

["TOKEN", "CHANNEL_ID"].some((x) => {
    if (!process.env[x]) throw new Error(`Missing ${x} env var!`);
});
const rest = new RestManager({ token: process.env.TOKEN });

void (async () => {
    await rest.router.createChannelMessage(process.env.CHANNEL_ID, "Test message!");
})();
