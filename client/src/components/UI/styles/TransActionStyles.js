import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    root: {
      flexGrow: 1,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
      marginBottom: 40,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    list: {
      display: "flex",
      height: 45,
    },
    listItem: {
      position: "relative",
    },

    listItemText: {
      fontSize: 12,
      position: "absolute",
    },
  }),
  { index: 1 }
);
