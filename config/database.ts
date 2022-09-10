import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'camcyber',
  password: process.env.POSTGRES_PASSWORD || 'camcyber.node',
  database: process.env.POSTGRES_DB || 'exam',
  synchronize: true,
};

export default config;