import { PLAYERS22 } from "../../app/shared/PLAYERS";
import { PLAYERS23 } from "../../app/shared/PLAYERS";
import { PLAYERS24 } from "../../app/shared/PLAYERS";

export function LeaderboardBuilder(bucket) {
  if (bucket === "Goals") {
    return leaderGoals();
  } else if (bucket === "Assists") {
    return leaderAssists();
  } else if (bucket === "Points") {
    return leaderPoints();
  }
}

function leaderGoals() {
  const leaders = PLAYERS24.sort((a, b) => b.goals - a.goals);
  const leadersFiltereed = [leaders[0], leaders[1], leaders[2]];
  return leadersFiltereed;
}

function leaderAssists() {
  const leaders = PLAYERS24.sort((a, b) => b.assists - a.assists);
  const leadersFiltereed = [leaders[0], leaders[1], leaders[2]];
  return leadersFiltereed;
}

function leaderPoints() {
  const leaders = PLAYERS24.sort((a, b) => b.points - a.points);
  const leadersFiltereed = [leaders[0], leaders[1], leaders[2]];
  return leadersFiltereed;
}
