import { Fight } from '../fight.entity';
import { TurnOrder } from './turn-order.domain';
import { Unit } from './unit.domain';

export class Director {
  public round: number;
  public turnOrder: TurnOrder;
  public units: Unit[];
  constructor(public readonly fight: Fight) {
    this.units = [
      ...this.fight.groupA.map((character) => new Unit(character, 'A')),
      ...this.fight.groupB.map((character) => new Unit(character, 'B')),
    ];
    this.turnOrder = new TurnOrder(this.units);
    this.round = 0;
    this.startRound();
  }

  public startRound() {
    this.round++;
    let currentUnit = this.turnOrder.nextTurn();
    while (currentUnit !== undefined) {
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
      currentUnit = this.turnOrder.nextTurn();
    }
  }
}
