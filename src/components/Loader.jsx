import Snowfall from "react-snowfall";
import snow from "../assets/snowflake.png";
import { Box } from "@mui/material";

const snowflake1 = document.createElement("img");
snowflake1.src = snow;

const images = [snowflake1];

const Loader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backdropFilter: "blur(5px)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <Snowfall snowflakeCount={200} images={images} radius={[6, 20]} />;
    </Box>
  );
};

export default Loader;
