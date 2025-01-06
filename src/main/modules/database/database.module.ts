import { OrmConfig } from '@/main/config/orm.config';

export class DatabaseModule {
  constructor(public ormConfig: OrmConfig) {
    ormConfig.dataSource
      .initialize()
      .then(() => console.log('Database connected!'));
  }
}
