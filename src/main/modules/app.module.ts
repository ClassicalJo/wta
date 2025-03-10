import { WebContents } from 'electron';

import dataSource from '../config/orm.config';
import { CharacterModule } from './character/character.module';
import { DatabaseModule } from './database/database.module';
import { FightModule } from './fight/fight.module';
import { GiftModule } from './gift/gift.module';
import { MessageModule } from './message/message.module';
import { RitualModule } from './ritual/ritual.module';

export class AppModule {
  constructor(webContents: WebContents) {
    const messageModule = new MessageModule(webContents);
    new CharacterModule(dataSource, messageModule.messageService);
    new GiftModule(dataSource, messageModule.messageService);
    new RitualModule(dataSource, messageModule.messageService);
    new FightModule(dataSource, messageModule.messageService);
    new DatabaseModule(dataSource);
  }
}
