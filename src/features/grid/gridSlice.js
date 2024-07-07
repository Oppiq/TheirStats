import { TEAMS_SHORT } from "../../app/shared/TEAMS";
import { PLAYERS24 } from "../../app/shared/PLAYERS";

export const teamsSorted = TEAMS_SHORT.sort();

export const dallasSorted = PLAYERS24.filter(
  (player) => player.teamAbbrevs === "DAL"
);

export function playersFiltered(team) {
  const tempContainer = PLAYERS24.filter((abbr) => abbr.teamAbbrevs === team);

  return tempContainer;
}
