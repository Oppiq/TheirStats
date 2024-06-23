import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { dallasSorted } from "./gridSlice";

const columns = [
  {
    field: "skaterFullName",
    headerName: "Name",
    width: 150,
    editable: false,
  },
  {
    field: "positionCode",
    headerName: "Position",
    width: 75,
    editable: false,
  },
  {
    field: "gamesPlayed",
    headerName: "GP",
    width: 75,
    editable: false,
  },
  {
    field: "goals",
    headerName: "G",
    width: 75,
    editable: false,
  },
  {
    field: "assists",
    headerName: "A",
    width: 75,
    editable: false,
  },
  {
    field: "points",
    headerName: "Pts",
    width: 75,
    editable: false,
  },
  {
    field: "pointsPerGame",
    headerName: "PPG",
    width: 75,
    editable: false,
  },
  {
    field: "shots",
    headerName: "Shots",
    width: 75,
    editable: false,
  },
  {
    field: "shootingPct",
    headerName: "Spt",
    width: 75,
    editable: false,
  },
  {
    field: "plusMinus",
    headerName: "+/-",
    width: 75,
    editable: false,
  },
  {
    field: "penaltyMinutes",
    headerName: "PIM",
    width: 75,
    editable: false,
  },
  {
    field: "timeOnIcePerGame",
    headerName: "TOI",
    width: 75,
    editable: false,
  },
  {
    field: "faceOffWinPct",
    headerName: "FOW",
    width: 75,
    editable: false,
  },
  {
    field: "gameWinningGoals",
    headerName: "GWG",
    width: 75,
    editable: false,
  },
  {
    field: "otGoals",
    headerName: "OTG",
    width: 75,
    editable: false,
  },
  {
    field: "ppGoals",
    headerName: "PPG",
    width: 75,
    editable: false,
  },
  {
    field: "ppPoints",
    headerName: "PPP",
    width: 75,
    editable: false,
  },
  {
    field: "shGoals",
    headerName: "SHG",
    width: 75,
    editable: false,
  },
  {
    field: "shPoints",
    headerName: "SHP",
    width: 75,
    editable: false,
  },
];

const rows = [];

dallasSorted.map((player, idx) => {
  let tempObject = {
    id: idx,
    skaterFullName: player.skaterFullName,
    positionCode: player.positionCode,
    gamesPlayed: player.gamesPlayed,
    goals: player.goals,
    assists: player.assists,
    points: player.points,
    pointsPerGame: player.pointsPerGame,
    shots: player.shots,
    shootingPct: player.shootingPct,
    plusMinus: player.plusMinus,
    penaltyMinutes: player.penaltyMinutes,
    timeOnIcePerGame: player.timeOnIcePerGame,
    faceOffWinPct: player.faceoffWinPct,
    gameWinningGoals: player.gameWinningGoals,
    otGoals: player.otGoals,
    ppGoals: player.ppGoals,
    ppPoints: player.ppPoints,
    shGoals: player.shGoals,
    shPoints: player.shGoals,
  };
  rows.push(tempObject);
});

const StatsGrid = () => {
  return (
    <Box sx={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 23,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default StatsGrid;
