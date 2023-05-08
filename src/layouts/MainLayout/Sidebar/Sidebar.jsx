import {
  Avatar,
  Stack,
  Typography,
  Switch,
  Box,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/material/styles";
import CitySelect from "./CitySelect/CitySelect";
import { useSpring, animated, config } from "react-spring";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Flipped } from "react-flip-toolkit";
import { themeMode } from "../../../reducers/customization";
import sun from "../../../assets/sun.json";
import moon from "../../../assets/moon.json";
import Lottie from "react-lottie";
import Hailstone from "../../../assets/clouds.gif";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppsIcon from "@mui/icons-material/Apps";
import AirIcon from "@mui/icons-material/Air";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Sidebar = () => {
  const { current, currentLocation } = useSelector((state) => state);
  const whichMode = useSelector((state) => state.customization.bool);
  const dispatch = useDispatch();

  const eventHandler = () => {
    dispatch(themeMode(!whichMode));
  };

  const { number } = useSpring({
    from: { number: 0 },
    number: current.temp ? Math.round(current.temp - 273.15) : 0,
    delay: 900,
    config: config.molasses,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
  };

  return (
    <Grid
      xs={12}
      sm={12}
      md={5}
      lg={4.5}
      sx={{
        display: "flex",
        flexFlow: "column",
        width: "100%",
        height: { md: "inherit", sm: "80vh", xs: "80vh" },
        p: { md: 2, sm: 2, xs: 1 },
      }}
    >
      <Grid
        sx={{
          flex: "auto",
          display: "grid",
          background: "linear-gradient(0deg, #1067F5, #13B5FE)",
          borderRadius: "60px",
          overflow: "hidden",
          p: 3,
          gridTemplateColumns: "repeat(1, auto)",
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // height: "max-content",
            background: "transparent",
          }}
        >
          <IconButton>
            <AppsIcon sx={{ color: "#fff" }} />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* <LocationOnIcon /> */}
            <Typography variant="h3">
              {currentLocation?.loc.split(",")[0]}
            </Typography>
          </Box>
          <IconButton>
            <MoreVertIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Grid>
        <Grid
          sx={{
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <CitySelect />
          <Box>he</Box>
          <Box>he</Box>
        </Grid>
        <Grid
          sx={{
            justifySelf: "flex-end",
            borderTop: "1px solid #fff",
            width: "100%",
            height: "max-content",
            background: "transparent",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {[...Array(3)].map((e, i) => (
            <Stack key={i} direction="column" alignItems="center" px={3} pt={2}>
              <AirIcon />
              <Typography variant="h5">13 km/h</Typography>
              <Typography variant="h6">Wind</Typography>
            </Stack>
          ))}
        </Grid>
        {/* <Grid className="tools_bar">
          <Stack direction="row" className="tools_bar_stack">
            <CitySelect />
            <Box display="flex" alignItems="center" onClick={eventHandler}>
              {whichMode ? (
                <Lottie
                  options={{ ...defaultOptions, animationData: sun }}
                  height="60px"
                  width="60px"
                />
              ) : (
                <Lottie
                  options={{ ...defaultOptions, animationData: moon }}
                  height="60px"
                  width="60px"
                />
              )}
            </Box>

            <Link to="profile">
              <Flipped flipId={"one"}>
                <Avatar
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  variant="square"
                  sx={{ borderRadius: "10px", cursor: "pointer" }}
                />
              </Flipped>
            </Link>
          </Stack>
        </Grid>

        <Grid
          className="temperature"
          display="flex"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Box>
            <Typography className="temperature_value" variant="body">
              {current && current.temp && (
                <animated.div>{number.to((n) => n.toFixed())}</animated.div>
              )}
              <span className="temperature_round">°</span>
            </Typography>
            {currentLocation && (
              <Typography
                className="current_location_name"
                display="block"
                noWrap
                variant="body"
              >
                {currentLocation.loc.split(",")[0]}
              </Typography>
            )}
            <Typography className="temperature_description" variant="body">
              {current && current.weather && current.weather[0].description}
            </Typography>
          </Box>
          <Box>
            <img
              style={{ background: "transparent" }}
              height="150px"
              width="150px"
              src={Hailstone}
              alt=""
            />
          </Box>
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
