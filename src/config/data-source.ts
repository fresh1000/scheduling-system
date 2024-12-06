import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'scheduling_system',
  synchronize: false, // Avoid in production
  migrationsRun: true, // Set to true in production for auto-run
  migrations: ['src/migrations/*.ts'],
});
