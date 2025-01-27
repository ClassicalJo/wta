import { Unit } from './unit.domain';

export class TurnOrder {
  public turns: Unit[];
  public turn: number;

  constructor(public readonly units: Unit[]) {
    this.turns = this.setTurns(units);
    this.turn = 0;
  }

  public setTurns(units: Unit[]): Unit[] {
    units.forEach((unit) => unit.rollInitiative());
    return units.sort((a, b) => b.initiative - a.initiative);
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
