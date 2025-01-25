import { CreateRitualDto } from '@/main/modules/ritual/application/dto/create-ritual.dto';
import { UpdateRitualDto } from '@/main/modules/ritual/application/dto/update-ritual.dto';
import { Ritual } from '@/main/modules/ritual/domain/ritual.entity';

import { IEntityService } from '../interfaces/entity-service.interface';

class RitualService implements IEntityService<Ritual> {
  create(ritualDto: CreateRitualDto) {
    window.electron.db.ritual.create(ritualDto);
  }

  update(ritualDto: UpdateRitualDto) {
    window.electron.db.ritual.update(ritualDto);
  }

  read(id: number) {
    window.electron.db.ritual.read(id);
  }

  readAll() {
    window.electron.db.ritual.readAll();
  }

  delete(id: number) {
    window.electron.db.ritual.delete(id);
  }
}

export const ritualService = new RitualService();
