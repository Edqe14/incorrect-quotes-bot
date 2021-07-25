import { MessageEmbed, MessageEmbedOptions } from 'discord.js';

class SuccessEmbed extends MessageEmbed {
  constructor(data?: MessageEmbed | MessageEmbedOptions) {
    super(data);

    this.setColor('#0ed60a');
    this.setTimestamp(Date.now());
  }
}

export default SuccessEmbed;
