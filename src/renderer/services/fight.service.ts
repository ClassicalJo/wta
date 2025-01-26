import { CreateFightDto } from '@/main/modules/fight/application/dto/create-fight.dto';
import { UpdateFightDto } from '@/main/modules/fight/application/dto/update-fight.dto';
import { Fight } from '@/main/modules/fight/domain/fight.entity';

import { IEntityService } from '../interfaces/entity-service.interface';

class FightService implements IEntityService<Fight> {
  create(fightDto: CreateFightDto) {
    window.electron.db.fight.create(fightDto);
  }

  update(fightDto: UpdateFightDto) {
    window.electron.db.fight.update(fightDto);
  }

  read(id: number) {
    window.electron.db.fight.read(id);
  }

  readAll() {
    window.electron.db.fight.readAll();
  }

  delete(id: number) {
    window.electron.db.fight.delete(id);
  }
}

export const fightService = new FightService();
