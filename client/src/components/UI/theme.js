import { createMuiTheme } from "@material-ui/core/styles";

const myGreen =  '#0AB571' ;
const myBlue =  '#334CD2' ;

export default createMuiTheme({
  palette: {
    common: {
      green: myGreen,
      blue: myBlue,
        white : "#FFFFFF"
    },
    primary: {
      main: myBlue,
    },
    secondary: {
      main: myGreen,
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
