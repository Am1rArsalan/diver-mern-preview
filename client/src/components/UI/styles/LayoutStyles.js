import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    root: {
      padding: ".6rem 0",
      direction: "rtl",
      [theme.breakpoints.up("md")]: {
        marginTop: "1.5rem",
        overflow: "hidden",
        height: "95vh",
      },
      [theme.breakpoints.down("md")]: {
        padding: 0,
      },
      [theme.breakpoints.down("xs")]: {
        padding: 0,
      },
    },
    content: {
      height: "100%",
    },
    contentArea: { maxWidth: "99" },
  }),
  { index: 1 }
);
