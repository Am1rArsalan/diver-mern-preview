import { makeStyles } from "@material-ui/core/styles";

const useSharedStyles = makeStyles((theme) => ({
  root: {
    //background: theme.palette.common.blue ,
    boxShadow: "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    color: theme.palette.common.white,
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
  },
  text: {
    fontFamily: "IRANSans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "24px",
    //[theme.breakpoints.down("md")]: {
      //padding: 0,
      //fontSize: "8px",
    //},
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      fontSize: "8px",
    },
  },
  contentBox: {
    background: theme.palette.common.white ,
    boxShadow: "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },

  button: {
    color: theme.palette.color,
    borderColor: theme.palette.common.white,
    width: 176,
    height: 40,
    marginBottom: 5,
    border: `1px solid ${theme.palette.common.white} ` ,
    boxShadow: "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.25)",
    boxSizing: "border-box",
    borderRadius: 3,
    [theme.breakpoints.down("md")]: {
        width: 136,
        height: 36,
    },
    [theme.breakpoints.down("xs")]: {
        width: 136,
        height: 36,
    },
  },
  greenButton: {
    backgroundColor: theme.palette.common.green ,
  },
  blueButton: {
    backgroundColor: theme.palette.common.blue,
  },
  buttonLabel: {
    color : theme.palette.common.white  ,
    backdropFilter: 'blur(4px)' ,
    fontFamily: "IRANSans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "25px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },

  alignLeft: { textAlign: "left" },
  alignRight: { textAlign: "right" },
}));

export default useSharedStyles;
