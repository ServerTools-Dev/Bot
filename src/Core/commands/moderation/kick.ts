import { Command } from "../../../Lib";
import { Message } from "discord.js";

export = class KickCommand extends Command {
    constructor() {
        super("kick");
    }

    run(message: Message, [user, reason]: string[]) {

    }
}
