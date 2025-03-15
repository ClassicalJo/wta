import { DataSource } from 'typeorm';

export class DatabaseModule {
  constructor(public dataSource: DataSource) {
    this.initialize();
  }
  async initialize() {
    await this.dataSource.initialize();
    console.log('Database connected');
    await this.dataSource.runMigrations();
    console.log('Migrations applied successfully');
  }
}
