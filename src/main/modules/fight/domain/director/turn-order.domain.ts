import { Unit } from './unit.domain';

export class TurnOrder {
  public turns: Unit[];
  public turn: number;

  constructor(public readonly units: Unit[]) {
    this.units.forEach((unit) => unit.rollInitiative());
    this.turns = [];
    this.turn = 1;
  }

  public reset() {
    this.turn = 1;
    this.turns = [...this.units];
    this.turns.sort((a, b) => b.initiative - a.initiative);
  }

  public getCurrentTurn(): Unit {
    return this.turns[0];
  }

  public nextTurn(): Unit | undefined {
    this.turns.splice(0, 1);
    this.turn++;
    return this.getCurrentTurn();
  }
}
