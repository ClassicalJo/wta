import { Fight } from '../fight.entity';
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

    while (!victory) {
      this.round++;
      console.log('This is round ' + this.round);

      if (this.round > 10) {
        console.log('Round limit reached, game over!');
        victory = true;
      }

      this.turnOrder.reset();

      currentUnit = this.turnOrder.getCurrentTurn();
      console.log('Current Unit Group: ' + currentUnit.group);
      target = this.getTarget(currentUnit?.group);

      while (currentUnit) {
        console.log('Current unit is ' + currentUnit?.character.name);
        if (!target) {
          console.log('There are no more targets available!');
          winner = currentUnit;
          victory = true;
          currentUnit = null;
        } else if (!currentUnit.isAlive) {
          console.log('Current unit is not alive, skipping turn!');
          currentUnit = this.turnOrder.nextTurn();
          target = this.getTarget(currentUnit?.group);
        } else {
          console.log('Current target is ' + target?.character.name);
          console.log(
            'This is round ' + this.round + ' turn ' + this.turnOrder.turn,
          );
          console.log(
            'It is now Group ' +
              currentUnit.group +
              "'s " +
              currentUnit.character.name +
              "'s turn",
          );

          console.log('The target is ' + target.character.name);
          const damage = currentUnit.brawl(6, 6);
          const soak = target.soak(damage);
          console.log('The damage after soaking is ' + soak);
          target.receiveDamage(soak);
          console.log('The target health is now ' + target.health);
          console.log("Current unit's turn finished, moving to next turn");
          currentUnit = this.turnOrder.nextTurn();
          target = this.getTarget(currentUnit?.group);
        }
      }
    }
    console.log('Team ' + winner.group + ' wins!');
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
