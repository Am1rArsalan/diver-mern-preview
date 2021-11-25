import { makeStyles } from "@material-ui/core/styles";
import HeaderBack from "../../../assets/prominent header.svg";

export default makeStyles(
  (theme) => ({
    header: {
      height: 96,
      background: `url("${HeaderBack}")`,
      [theme.breakpoints.down("sm")]: {
        height: "auto",
      },
    },
    headerScrolled: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: 0,
        position: "fixed",
        width: "100%",
        height: 70,
        zIndex: 6666,
      },
    },
    headerScrollTop: {
      [theme.breakpoints.down("xs")]: {
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 8,
      },
    },
    searchButton: {
      padding: 5,
      borderRadius: 15,
      "&:hover": {
        cursor: "pointer",
        boxShadow: "0 2px 4px #aaa",
      },
    },
  }),
  { index: 1 }
);
