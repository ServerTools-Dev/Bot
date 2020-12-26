import { GuildMember, User } from "discord.js";

require("dotenv").config({ path: __dirname + "/../.env" });

import { BaseClient, Config } from "./Lib";
import "./Lib/structures/extend/Guild";
import "./Lib/structures/extend/GuildMember";
import "./Lib/structures/extend/User";
import "./Lib/structures/extend/Message";

declare module "discord.js" {
    interface Message {
        sem(content: string, options?: { type?: "error" | "base"; reply?: boolean }): Promise<Message>;

        find(type: "member" | "user", query: string): Promise<User | GuildMember | undefined | null>
    }
}

const bot = new BaseClient(Config.get("token"));
bot.start();
