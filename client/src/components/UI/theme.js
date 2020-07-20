import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72b9";
const arcOrange = "#FFBA69";

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange ,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      fontWeight: 700,
      textTransform: "none",
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      fontSize: "1rem",
      color: "#fff",
    },
  },
});
