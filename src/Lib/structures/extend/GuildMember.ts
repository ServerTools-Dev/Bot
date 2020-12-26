import { Structures } from "discord.js"

export class ExtendedMember extends Structures.get("GuildMember") {
}

Structures.extend("GuildMember", () => ExtendedMember);
