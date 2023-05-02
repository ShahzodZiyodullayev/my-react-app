import { useSelector } from "react-redux";

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import themes from "./themes";
import Routes from "./routes";

function App() {
  const customization = useSelector((state) => state.customization);

  // useEffect(() => {
  //   dispatch(themeMode());
  // }, []);
  // const theme = useTheme();
  // const dispatch = useDispatch();

  // const isMd = useMediaQuery(theme.breakpoints.between("md", "lg")) && 3;
  // const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")) && 2;
  // const isXs = useMediaQuery(theme.breakpoints.between("xs", "sm")) && 1;

  // const sidesPadding = isMd ? 3 : isSm ? 2 : isXs ? 1 : 3;

  // useEffect(() => {
  //   dispatch(otherStylesMode({ sidesPadding }));
  // }, [isMd, isSm, isXs]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
