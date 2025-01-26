import { WebContents } from 'electron';

import { OrmConfig } from '../config/orm.config';
import { BackgroundSchema } from './background/infrastructure/database/background.schema';
import { CharacterModule } from './character/character.module';
import { CharacterSchema } from './character/infrastructure/database/character.schema';
import { DatabaseModule } from './database/database.module';
import { FightModule } from './fight/fight.module';
import { FightSchema } from './fight/infrastructure/database/fight.schema';
import { GiftModule } from './gift/gift.module';
import { GiftSchema } from './gift/infrastructure/database/gift.schema';
import { MessageModule } from './message/message.module';
import { RitualSchema } from './ritual/infrastructure/database/ritual.schema';
import { RitualModule } from './ritual/ritual.module';

export class AppModule {
  constructor(webContents: WebContents) {
    const { dataSource } = new OrmConfig([
      CharacterSchema,
      GiftSchema,
      RitualSchema,
      BackgroundSchema,
      FightSchema,
    ]);
    const messageModule = new MessageModule(webContents);
    new CharacterModule(dataSource, messageModule.messageService);
    new GiftModule(dataSource, messageModule.messageService);
    new RitualModule(dataSource, messageModule.messageService);
    new FightModule(dataSource, messageModule.messageService);
    new DatabaseModule(dataSource);
  }
}
