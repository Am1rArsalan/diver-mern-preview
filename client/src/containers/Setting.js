import React from "react";
//import {
  //makeStyles,
//} from "@material-ui/core/styles";
import {
  Grid,
  Button,
} from "@material-ui/core";
import useSharedStyles from "../components/UI/useShareStyles";

//const useSittingStyles = makeStyles(() => ({
//}));

export default function () {
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
