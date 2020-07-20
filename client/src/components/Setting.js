import React from "react";
import {
  useTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Badge,
  Avatar,
  SvgIcon,
  Button,
  Fab,
  Typography,
} from "@material-ui/core";
import { FiPlus } from "react-icons/fi";
import useSharedStyles from "./UI/useShareStyles";

const useSittingStyles = makeStyles(() => ({
  content: {
    height: "100%",
    //backgroundColor:"#ccc"
  },
  header: { height: 96, marginBottom: 16, paddingTop: 20, paddingBottom: 20 },
  fabLabel: { fontSize: "4rem", color: "#fff" },
  fab: {
    background: "#0AB571",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    boxShadow: "0.5px 0.5px 1px rgba>(0, 0, 0, 0.15)",
  },
}));

export default function () {
  const classes = useSittingStyles();
  const sharedClasses = useSharedStyles();
  return (
    <Grid container justify="space-around">
      <Grid
        item
        xs={6}
        style={{ backgroundColor: "#fff" }}
        className={sharedClasses.contentBox}
      >
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
          style={{ paddingTop: 48 }}
        >
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  classes={{
                    root: [
                      sharedClasses.button,
                      sharedClasses.greenButton,
                    ].join(" "),
                    label: sharedClasses.buttonLabel,
                  }}
                >
                  شارژ دیوار{" "}
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  classes={{
                    root: [sharedClasses.button, sharedClasses.blueButton].join(
                      " "
                    ),
                    label: sharedClasses.buttonLabel,
                  }}
                >
                  {" "}
                  برداشت ارز دیوار{" "}
                </Button>
              </Grid>
            </Grid>

            <Grid item></Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6} className={sharedClasses.contentBox}>
        {" "}
        left{" "}
      </Grid>
    </Grid>
  );
}
