import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'Anton',
  password: '123456789',
  database: 'nest-test',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
export default config;
