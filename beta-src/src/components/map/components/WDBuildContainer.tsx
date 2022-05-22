/* eslint-disable no-bitwise */
import * as React from "react";
import BuildUnitMap from "../../../data/BuildUnit";
import countryMap from "../../../data/map/variants/classic/CountryMap";
import Territories from "../../../data/Territories";
import { gameApiSliceActions } from "../../../state/game/game-api-slice";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import WDBuildUnitButtons from "./WDBuildUnitButtons";

const WDBuildContainer: React.FC = function (): React.ReactElement {
  const dispatch = useAppDispatch();
  const build = (availableOrder, canBuild, toTerrID) => {
    console.log(
      `Dispatched a build ${canBuild} ${BuildUnitMap[canBuild]} ${toTerrID}`,
    );
    dispatch(
      gameApiSliceActions.updateOrdersMeta({
        [availableOrder]: {
          saved: false,
          update: {
            type: BuildUnitMap[canBuild],
            toTerrID,
          },
        },
      }),
    );
    dispatch(gameApiSliceActions.resetOrder());
  };
  const buildPopover = useAppSelector((state) => state.game.buildPopover);
  const userMember = useAppSelector((state) => state.game.overview.user.member);

  console.log({ buildPopover });
  return (
    <>
      {Object.values(buildPopover).map((b) => {
        const territory = Territories[b.territoryMeta.territory];
        return (
          <WDBuildUnitButtons
            key={`${b.territoryMeta.id}-${b.unitSlotName}`}
            availableOrder={b.availableOrder}
            canBuild={b.canBuild}
            clickCallback={build}
            country={countryMap[userMember.country]}
            territoryName={territory.parent?.territory || territory.territory}
            unitSlotName={b.unitSlotName}
            toTerrID={b.territoryMeta.id}
          />
        );
      })}
    </>
  );
};

export default WDBuildContainer;
