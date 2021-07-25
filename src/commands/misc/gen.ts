import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
import Texts from '../../texts';
import SuccessEmbed from '../../util/SuccessEmbed';

module.exports = class Example extends Command {
  constructor() {
    super('generate', {
      aliases: ['generate', 'gen'],
      category: 'Misc',
      description: {
        content: 'Generate a new prompt',
        usage: '<name1>[|...names]',
        examples: ['Bob,Alex,Steve'],
      },
      separator: '|',
      args: [
        {
          id: 'users',
          match: 'separate',
          type: 'string',
        },
      ],
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exec(message: Message, args: Record<string, any>) {
    const users = args.users as string[];
    if (!users)
      return message.reply('Invalid character(s)! Minimum is 1 character.');

    const key = Texts.keys[users.length - 1] as keyof typeof Texts;
    if (!key)
      return message.reply('Too many characters! Maximum is 6 characters.');

    const prompts = Texts[key];

    let prompt = prompts[Math.floor(Math.random() * prompts.length)];
    const names = users.reduce((a, name, i) => {
      a[Texts.characters[i]] = name;
      a[Texts.uppercased[i]] = name.toUpperCase();
      return a;
    }, {} as Record<string, string>);
    Object.keys(names).forEach((k) => {
      prompt = prompt.replace(new RegExp(`{${k}}`, 'g'), names[k]);
    });

    const embed = new SuccessEmbed()
      .setAuthor("Here's your prompt...", this.client.user.displayAvatarURL())
      .setDescription(prompt);

    return message.reply(embed);
  }
};
