import { Structures } from "discord.js";

export class ExtendedGuild extends Structures.get('Guild') {
    constructor() {
        super(arguments[0], arguments[1]);
    }
}

Structures.extend('Guild', () => ExtendedGuild);
