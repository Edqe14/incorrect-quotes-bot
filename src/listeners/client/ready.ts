import { Listener } from 'discord-akairo';

module.exports = class ReadyListener extends Listener {
  constructor() {
    super('ready', {
      emitter: 'client',
      event: 'ready',
      category: 'client',
    });
  }

  exec() {
    console.log(`Logged in as ${this.client.user.tag}`);
    // @ts-expect-error Check for remaining session restarts
    console.log(`Restarts left: ${this.client.ws.sessionStartLimit.remaining}`);
    this.client.user.setActivity({ type: 'PLAYING', name: 'p!gen Mi|Yu|Wi' });
  }
};
