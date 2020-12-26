import { Command } from "../../../Lib";
import { Message, MessageEmbed } from "discord.js";
import moment from "moment";

export = class ServerinfoCommand extends Command {
    constructor() {
        super("serverinfo", {
            category: "information",
            description: "Information about this server.",
        });
    }

    public run(message: Message, args: string[]) {
        const embed = new MessageEmbed()
          .setAuthor(message.guild?.name)
          .addField(`**Server info 📜 **`, `- **Members:** ${ message.guild?.memberCount } \n - **Region:** ${ message.guild?.region } \n - **Owner:** <@${ message.guild?.ownerID }> \n - **Boosts:** ${ message.guild?.premiumSubscriptionCount } \n - **Created:** ${ moment(message.guild?.createdAt).format("LLL") }`, true)
          .addField(`**Other:**`, `**Afk channel:** ${ message.guild?.afkChannel ? message.guild?.afkChannel : ":x:" } \n **Partnered:** ${ message.guild?.partnered ? ":white_check_mark:" : ":x:" } \n **Verified:** ${ message.guild?.verified ? ":white_check_mark:" : ":x:" }`, true)
          .setThumbnail(message.guild!.iconURL({ dynamic: true, format: "png", size: 4096 })!)
          .setFooter(`Server id: ${ message.guild?.id }`)
          .setColor("BLACK");
        message.channel.send(embed);
    }
};
