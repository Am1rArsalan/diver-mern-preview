import { makeStyles } from "@material-ui/core/styles";
//import HeaderBack from "../../../assets/prominent header.svg";
import Plus from "../../../assets/main plus.svg";

export default makeStyles((theme) => ({
  fabLabel: {
    fontSize: "4rem",
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      fontSize: "6rem",
    },
  },
  fab: {
    //background: theme.palette.common.myGreen  ,
    //border: "1px solid theme.palette.common.white,
    background: `url("${Plus}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxSizing: "border-box",
    boxShadow: "0.5px 0.5px 1px rgba>(0, 0, 0, 0.15)",
    [theme.breakpoints.down("xs")]: {
      width: "35px",
      height: "35px",
    },
  },
  fabSize: {
    width: 32,
    height: 32,
  },
  labelSize: {
    fontSize: 8,
    lineHeight: 14,
  },
  amountWrapper: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "18rem",
      left: "6px",
    },
  },
}));
