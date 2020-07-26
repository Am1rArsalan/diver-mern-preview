import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    listItem: {
      boxShadow: "0px 0.5px 1.5px rgba(0, 0, 0, 0.15)",
      height: "5.6rem",
      [theme.breakpoints.down("xs")]: {
        marginBottom: 4,
      },
      "&:hover": {
        cursor: "pointer",
      },
    },

    reqBadge: {
      float: "right",
      color: "#FFFFFF",
      fontSize: 8,
      borderRadius: 8,
        padding: 4
    },
  }),
  { index: 1 }
);
