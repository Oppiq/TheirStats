import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { teamsSorted } from "./gridSlice";

const TeamSelector = () => {
  const [team, setTeam] = React.useState("ANA");

  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label"></InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={team}
          label="Team"
          onChange={handleChange}
        >
          {teamsSorted.map((team) => (
            <MenuItem key={team} value={team}>
              {team}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default TeamSelector;
