import { Avatar, IconButton, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { UilBell } from "@iconscout/react-unicons";
import CitySelect from "./CitySelect/CitySelect";
import { useSpring, animated, config } from "react-spring";
import "./styles.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const current = useSelector((state) => state.current);

  const { number } = useSpring({
    from: { number: 0 },
    number: current.temp ? Math.round(current.temp - 273.15) : 0,
    delay: 900,
    config: config.molasses,
  });

  return (
    <Grid
      xs={12}
      sm={12}
      md={4}
      sx={{
        display: "grid",
        // flexFlow: "column",
        height: "inherit",
        background: "linear-gradient(330deg, #11998e 0%, #38ef7d 100%) ",
        p: { lg: 3, md: 3, sm: 2, xs: 1 },
      }}
    >
      <Grid className="tools_bar">
        <Stack direction="row" spacing={1} className="tools_bar_stack">
          <CitySelect />
          <IconButton sx={{ borderRadius: "10px" }}>
            <UilBell style={{ color: "#fff" }} />
          </IconButton>
          <Avatar
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
            variant="square"
            sx={{ borderRadius: "10px", cursor: "pointer" }}
          />
        </Stack>
      </Grid>

      <Grid className="temperature">
        <Typography className="temperature_value" variant="body">
          {current && current.temp && (
            <animated.div>{number.to((n) => n.toFixed())}</animated.div>
          )}
          <span className="temperature_round">°</span>
        </Typography>
        {/* {currentLocation && (
          <Typography
            className="current_location_name"
            display="block"
            noWrap
            variant="body"
          >
            {currentLocation.data}
          </Typography>
        )} */}
        <Typography className="temperature_description" variant="body">
          {current && current.weather && current.weather[0].description}
        </Typography>
      </Grid>
      {/* <Typography variant="h1">Hello world</Typography> */}
    </Grid>
  );
};

export default Sidebar;
