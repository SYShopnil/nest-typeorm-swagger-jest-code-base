import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

export const dataSourceOption: DataSourceOptions = {
  type: process.env.DATABASE_TYPE as
    | 'mysql'
    | 'postgres'
    | 'mariadb'
    | 'sqlite'
    | 'mssql'
    | 'oracle'
    | 'mongodb',
  host: `${process.env.DATABASE_HOST}`,
  port: +`${process.env.DATABASE_PORT || 5432}`,
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  entities: ['dist/**/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOption);
export default dataSource;
