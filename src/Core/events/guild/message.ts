import { Config, Event } from "../../../Lib";
import { Message } from "discord.js";

const prefix = Config.get("prefix");

export = class MessageEvent extends Event {
    constructor() {
        super("MessageCreate");
    }

    async run(message: Message) {
        if (!message.guild) return;
        // @ts-ignore
        if (!message.member) message.member = await message.guild.members.fetch(message.author);
        if (message.content
          .trim()
          .match(new RegExp(`^<@!?${this.bot.user!.id}>( help)?$`, "i"))) return message.sem(`Use \`${ prefix }help\` for all commands!`, { reply: true });
        if (!message.content.startsWith(prefix)) return;

        const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = this.bot.commands.get(cmd) || this.bot.commands.find((c) => c.aliases.includes(cmd));

        try {
            if (command) await command.run(message, args);
        } catch (e) {
            message.sem("Oh no an error occured! A report has been send to the developers please wait patiently.", { type: "error" })
            console.error(e.stack.split("\n").slice(0, 2).join("\n"));
        }

    }
}
