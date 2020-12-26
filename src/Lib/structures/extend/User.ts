import { Structures } from "discord.js"

export class ExtendedUser extends Structures.get("User") {
}

Structures.extend("User", () => ExtendedUser);
