import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { LeaderboardBuilder } from "./leaderboardSlice";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Leaderboard = (props) => {
  const bucket = "Assists";
  const categoryLeaders = LeaderboardBuilder(bucket);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            {bucket}
          </Typography>
          <Demo>
            <List dense={true}>
              <ListItem>
                <ListItemIcon>{categoryLeaders[0].assists}</ListItemIcon>
                <ListItemText
                  primary={categoryLeaders[0].skaterFullName}
                  secondary={categoryLeaders[0].teamAbbrevs}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>{categoryLeaders[1].assists}</ListItemIcon>
                <ListItemText
                  primary={categoryLeaders[1].skaterFullName}
                  secondary={categoryLeaders[1].teamAbbrevs}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>{categoryLeaders[2].assists}</ListItemIcon>
                <ListItemText
                  primary={categoryLeaders[2].skaterFullName}
                  secondary={categoryLeaders[2].teamAbbrevs}
                />
              </ListItem>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Leaderboard;
