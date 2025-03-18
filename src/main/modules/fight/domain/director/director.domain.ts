import { Fight } from '../fight.entity';
import { logger } from './logger.domain';
import { TurnOrder } from './turn-order.domain';
import { Unit } from './unit.domain';

type GroupName = 'A' | 'B';
export class Director {
  public round: number;
  public turnOrder: TurnOrder;
  public units: Unit[];
  public targets: Partial<Record<GroupName, Unit[]>> = {};
  constructor(public readonly fight: Fight) {
    const groupA =
      this.fight.groupA.map((character) => new Unit(character, 'A')) ?? [];
    const groupB =
      this.fight.groupB.map((character) => new Unit(character, 'B')) ?? [];

    this.targets['B'] = groupA;
    this.targets['A'] = groupB;

    this.units = [...groupA, ...groupB];

    this.turnOrder = new TurnOrder(this.units);
    this.round = 0;
    this.nextRound();
  }

  public nextRound() {
    let victory = false;
    let winner: Unit;
    let currentUnit: Unit;
    let target: Unit;

    while (!victory && this.round < 10) {
      this.round++;
      logger.log('This is round ' + this.round);

      this.turnOrder.reset();

      currentUnit = this.turnOrder.getCurrentTurn();
      logger.log('Current Unit Group: ' + currentUnit.group);
      target = this.getTarget(currentUnit?.group);

      while (currentUnit) {
        logger.log('Current unit is ' + currentUnit?.character.name);
        if (!target) {
          logger.log('There are no more targets available!');
          winner = currentUnit;
          victory = true;
          currentUnit = null;
        } else if (!currentUnit.isAlive) {
          logger.log('Current unit is not alive, skipping turn!');
          currentUnit = this.turnOrder.nextTurn();
          target = this.getTarget(currentUnit?.group);
        } else {
          logger.log('Current target is ' + target?.character.name);
          logger.log(
            'This is round ' + this.round + ' turn ' + this.turnOrder.turn,
          );
          logger.log(
            'It is now Group ' +
              currentUnit.group +
              "'s " +
              currentUnit.character.name +
              "'s turn",
          );

          logger.log('The target is ' + target.character.name);
          const damage = currentUnit.brawl(6, 6);
          const soak = target.soak(damage);
          logger.log('The damage after soaking is ' + soak);
          target.receiveDamage(soak);
          logger.log('The target health is now ' + target.health);
          logger.log("Current unit's turn finished, moving to next turn");
          currentUnit = this.turnOrder.nextTurn();
          target = this.getTarget(currentUnit?.group);
        }
      }
    }
    if (this.round > 9) {
      logger.log('Round limit reached, the match is a tie!');
    } else {
      logger.log('Team ' + winner?.group + ' wins!');
    }
  }

  public getTarget(unitGroup: GroupName): Unit | null {
    let target: Unit = null;
    let i = 0;

    const targets = this.targets[unitGroup] ?? [];

    while (i < targets.length && !target) {
      const potentialTarget = targets[i];
      if (potentialTarget.isAlive) {
        target = potentialTarget;
      }
      i++;
    }

    return target;
  }
}
