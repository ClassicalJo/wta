import { WebContents } from 'electron';

import { OrmConfig } from '../config/orm.config';
import { BackgroundSchema } from './background/infrastructure/database/background.schema';
import { CharacterModule } from './character/character.module';
import { CharacterSchema } from './character/infrastructure/database/character.schema';
import { DatabaseModule } from './database/database.module';
import { GiftModule } from './gift/gift.module';
import { GiftSchema } from './gift/infrastructure/database/gift.schema';
import { MessageModule } from './message/message.module';
import { RitualSchema } from './ritual/infrastructure/database/ritual.schema';
import { RitualModule } from './ritual/ritual.module';

export class AppModule {
  constructor(webContents: WebContents) {
    const databaseProvider = new OrmConfig([
      CharacterSchema,
      GiftSchema,
      RitualSchema,
      BackgroundSchema,
    ]);
    const messageModule = new MessageModule(webContents);
    new CharacterModule(
      databaseProvider.dataSource,
      messageModule.messageService,
    );
    new GiftModule(databaseProvider.dataSource, messageModule.messageService);
    new RitualModule(databaseProvider.dataSource, messageModule.messageService);
    new DatabaseModule(databaseProvider.dataSource);
  }
}
