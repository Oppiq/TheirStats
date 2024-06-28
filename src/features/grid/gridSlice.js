import { TEAMS_SHORT } from "../../app/shared/TEAMS";
import { PLAYERS } from "../../app/shared/PLAYERS";

export const teamsSorted = TEAMS_SHORT.sort();

export const dallasSorted = PLAYERS.filter(
  (player) => player.teamAbbrevs === "DAL"
);

export function playersFiltered(team) {
  const tempContainer = PLAYERS.filter((abbr) => abbr.teamAbbrevs === team);

  return tempContainer;
}
