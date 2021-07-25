export default {
  token:
    process.env.NODE_ENV === 'development'
      ? process.env.DEV_TOKEN
      : process.env.TOKEN,
  prefix: 'p!', // Prefix
  ownerIDs: ['326966683187281922'], // Owner IDs
  guildID: '',
};

export interface configInterface {
  token: string;
  prefix: string;
  ownerIDs: string[];
  guildID: string;
  [key: string]: unknown;
}
