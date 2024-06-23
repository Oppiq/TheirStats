import { TEAMS_SHORT } from "../../app/shared/TEAMS";
import { PLAYERS } from "../../app/shared/PLAYERS";

export const teamsSorted = TEAMS_SHORT.sort();

export const dallasSorted = PLAYERS.filter(
  (player) => player.teamAbbrevs === "DAL"
);
