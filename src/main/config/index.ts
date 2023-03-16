import env from 'dotenv';
import path from 'path';

env.config({
  path: path.join(__dirname, `../../../env/.env.${process.env.NODE_ENV}`),
});

process.env.ENVIRONMENT = process.env.ENVIRONMENT || process.env.NODE_ENV;

export const config = {
  SERVER_PORT: process.env.SERVER_PORT,

  ENVIRONMENT: process.env.ENVIRONMENT || 'dev',

  DATABASE: {
    HOST: process.env.DATABASE_HOST,
    PORT: Number(process.env.DATABASE_PORT),
    USER: process.env.DATABASE_USERNAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME: process.env.DATABASE_NAME
  },
};
