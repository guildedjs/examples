require("dotenv/config");

const { Client, Embed } = require("guilded.js");
const client = new Client({ token: process.env.TOKEN });
const prefix = process.env.PREFIX;
const test_image = "https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459_960_720.png";

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
        case "embed": {
            await m.send(
                new Embed()
                    .setTitle("This is a test title!")
                    .setDescription("This is a test description")
                    .setColor("GREEN")
                    .setFooter("This is a test footer", "https://google.com/")
                    .setImage(test_image)
                    .setThumbnail(test_image)
                    .setTimestamp()
                    .setURL("https://google.com")
                    .setAuthor("Test author", test_image, "https://google.com")
                    .addFields([
                        { name: "Test field 1", value: "This is a test field", inline: true },
                        { name: "Test field 2", value: "This is a test field", inline: true },
                        { name: "Test field 3", value: "This is a test field", inline: false },
                    ]),
            );
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
