import { Avatar, Stack, Typography, Switch, Box } from "@mui/material";
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

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

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
            {/* <IOSSwitch
              sx={{ m: 1 }}
              defaultChecked={!whichMode}
              onClick={eventHandler}
            /> */}
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

      <Grid className="temperature">
        <Grid sx={{ background: "transparent" }}>
          <img
            style={{ background: "transparent" }}
            height="100px"
            width="100px"
            src={Hailstone}
            alt=""
          />
        </Grid>
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
            {currentLocation.loc}
          </Typography>
        )}
        <Typography className="temperature_description" variant="body">
          {current && current.weather && current.weather[0].description}
        </Typography>
      </Grid>
      {/* <Typography variant="h1">Hello world</Typography> */}
    </Grid>
  );
};

export default Sidebar;
