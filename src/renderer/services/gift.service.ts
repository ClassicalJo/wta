import { CreateGiftDto } from '@/main/modules/gift/application/dto/create-gift.dto';
import { UpdateGiftDto } from '@/main/modules/gift/application/dto/update-gift.dto';
import { Gift } from '@/main/modules/gift/domain/gift.entity';

import { IEntityService } from '../interfaces/entity-service.interface';

class GiftService implements IEntityService<Gift> {
  create(giftDto: CreateGiftDto) {
    window.electron.db.gift.create(giftDto);
  }

  update(giftDto: UpdateGiftDto) {
    window.electron.db.gift.update(giftDto);
  }

  read(id: number) {
    window.electron.db.gift.read(id);
  }

  readAll() {
    window.electron.db.gift.readAll();
  }

  delete(id: number) {
    window.electron.db.gift.delete(id);
  }
}

export const giftService = new GiftService();
