import { useDispatch, useSelector } from "react-redux";
import { themeMode } from "../../../reducers/customization";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Daily from "../../../pages/Daily";

const Rightbar = ({ children }) => {
  const whichMode = useSelector((state) => state.customization.bool);
  const dispatch = useDispatch();

  const eventHandler = () => {
    dispatch(themeMode(!whichMode));
  };

  return (
    <Grid
      xs={12}
      sm={12}
      md={8}
      sx={{
        overflow: { md: "scroll" },
        overflowX: { md: "hidden" },
        height: { md: "inherit", xs: "auto" },
        position: "relative",
        p: { lg: 3, md: 3, sm: 2, xs: 1 },
      }}
    >
      <Daily />
      <Grid>
        <Typography variant="h1">Hello World!</Typography>
        <Button onClick={eventHandler}>Hello world!</Button>
      </Grid>
      {children}
    </Grid>
  );
};

export default Rightbar;
