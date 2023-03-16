import { config } from '@main/config';
import { DataSource } from 'typeorm';


export const dataSource =  new DataSource({
  type: 'postgres',
  database: config.DATABASE.DATABASE_NAME,
  username: config.DATABASE.USER,
  password: config.DATABASE.PASSWORD,
  host: config.DATABASE.HOST,
  port: config.DATABASE.PORT,
  entities: [],
});
