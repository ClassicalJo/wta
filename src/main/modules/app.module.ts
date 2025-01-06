import { WebContents } from 'electron';

import { OrmConfig } from '../config/orm.config';
import { CharacterModule } from './character/character.module';
import { CharacterSchema } from './character/infrastructure/database/character.schema';
import { DatabaseModule } from './database/database.module';
import { MessageModule } from './message/message.module';

export class AppModule {
  constructor(webContents: WebContents) {
    const databaseProvider = new OrmConfig([CharacterSchema]);
    const messageModule = new MessageModule(webContents);
    new CharacterModule(
      databaseProvider.dataSource,
      messageModule.messageService,
    );
    new DatabaseModule(databaseProvider.dataSource);
  }
}
