import { DataSource } from 'typeorm';

export class DatabaseModule {
  constructor(public dataSource: DataSource) {
    this.dataSource.initialize().then(() => console.log('Database connected!'));
  }
}
