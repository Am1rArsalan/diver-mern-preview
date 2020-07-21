import { makeStyles } from "@material-ui/core/styles";

const useSharedStyles = makeStyles((theme) => ({
  root: {
    background: "#3041D0",
    boxShadow: "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    color: "#fff",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      borderRadius: 0,
    },
  },
  text: {
    fontFamily: "IRANSans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "24px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
      fontSize: "8px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      fontSize: "8px",
    },
  },
  contentBox: {
    background: "#FFFFFF",
    boxShadow: "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },

  button: {
    color: "#fff",
    borderColor: "#fff",
    width: 176,
    height: 40,
    marginBottom: 5,
    border: "1px solid #FFFFFF",
    padding: "1.5rem 2rem",
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
    backgroundColor: "#0AB571",
  },
  blueButton: {
    backgroundColor: "#334CD2",
  },
  buttonLabel: {
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
