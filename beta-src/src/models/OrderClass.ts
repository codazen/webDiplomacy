import BoardClass from "./BoardClass";
import TerritoryClass from "./TerritoryClass";
import { IOrderData } from "./Interfaces";
import UnitClass from "./UnitClass";

export default class OrderClass {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public board: BoardClass,
    public unit: UnitClass,
    public orderData: IOrderData,
  ) {}

  getMoveChoices() {
    const choices = this.board
      .getMovableTerritories(this.unit)
      .map((movableTerritories) => movableTerritories.id);

    if (this.unit.convoyLink && this.unit.type === "Army") {
      const convoyableTerritories = Array.from(
        this.unit.ConvoyGroup.coasts,
      ).reduce((acc: string[], cur) => {
        if (BoardClass.canConvoyTo(cur, this.unit)) {
          acc.push(cur.id);
        }

        return acc;
      }, []);
      return Array.from(new Set(choices.concat(convoyableTerritories)));
    }

    return choices;
  }

  /**
   * Get all units' name current unit can support-hold.
   */
  getSupportHoldChoices() {
    const movableUnits = this.board.getMovableUnits(this.unit);

    const supportHoldChoices = movableUnits.map(
      (mu) => mu?.Territory.coastParent.id,
    );

    return Array.from(new Set(supportHoldChoices));
  }

  /**
   * Get all territories current unit can support-move to (places I can support an attack to)
   */
  getSupportMoveToChoices() {
    const movableTerritories = this.board.getMovableTerritories(this.unit);

    return movableTerritories.map((mt) => mt.coastParent.id);
  }

  /**
   * Names of territories containing units which I can support into the given Territory
   * Essentially a list of units which can move into the given territory(territory that current unit can support move to)
   */
  getSupportMoveFromChoices(againstTerritory: TerritoryClass) {
    // Units bordering the given territory which can move into it
    let possibleUnits = this.board
      .getBorderUnits(againstTerritory.coastParent)
      .filter((bu) => {
        return this.board.canMoveInto(bu, againstTerritory);
      });

    if (againstTerritory.convoyLink) {
      /*
       * Resource intensive extra check, unnecessary 99% of the time. Leaving this disabled
       * means when an invalid support move is selected as a fleet the choice is undone once
       * it is selected and put through the check below.
       *
       */
      let ConvoyArmies;

      if (
        this.unit.convoyLink &&
        this.unit.type === "Fleet" &&
        Array.from(this.unit.ConvoyGroup.coasts)
          .map((coast) => coast.id)
          .includes(againstTerritory.id)
      ) {
        /**
         * Please ignore now. convoy path related code will be refactored later.
         */
        ConvoyArmies = Array.from(againstTerritory.ConvoyGroup.armies).filter(
          (convoyArmy) => {
            return !!againstTerritory.ConvoyGroup.pathArmyToCoastWithoutFleet(
              convoyArmy.Territory,
              againstTerritory,
              this.unit.Territory,
            );
          },
        );
      } else {
        ConvoyArmies = againstTerritory.ConvoyGroup.armies;
      }

      possibleUnits = possibleUnits.concat(ConvoyArmies);
    }

    return Array.from(
      new Set(
        possibleUnits.map(
          (possibleUnit) => possibleUnit.Territory.coastParent.id,
        ),
      ),
    ).filter((possibleUnitTerritory) => {
      /**
       * true if its not current territory and not agaianst territory
       */
      return (
        possibleUnitTerritory !== this.unit.Territory.coastParent.id &&
        possibleUnitTerritory !== againstTerritory.id
      );
    });
  }

  /**
   * get all coasts which a fleet can convoy an army to
   */
  getConvoyToChoices() {
    if (this.unit.convoyLink) {
      return Array.from(this.unit.ConvoyGroup.coasts).map((coast) => coast.id);
    }

    return [];
  }

  /**
   * get all coasts which a fleet can convoy an army from
   */
  getConvoyFromChoices(toTerritory: TerritoryClass) {
    if (this.unit.convoyLink) {
      return Array.from(this.unit.ConvoyGroup.armies).filter((convoyArmy) => {
        if (toTerritory.id === convoyArmy.Territory.id) {
          return false;
        }

        return !!toTerritory.ConvoyGroup.pathArmyToCoastWithFleet(
          convoyArmy.Territory,
          toTerritory,
          this.unit.Territory,
        );
      });
    }

    return [];
  }
}
