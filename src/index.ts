import dotenv from 'dotenv';
import Client from './modules/client';
dotenv.config();

import config from './config';

export default new Client(config).start();
