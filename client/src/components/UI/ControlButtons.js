import React from "react";
import useSharedStyles from "../UI/useShareStyles";
import { Grid, Button, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import propTypes from "prop-types";

function ControlButtons({ scrolled, blueText, greenText, setting }) {
  const sharedClasses = useSharedStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  let styles = {};

  if (scrolled && match) {
    styles = {
      width: match && scrolled ? "40px" : "auto",
      height: match && scrolled ? "32px" : "auto",
      fontSize: 8,
      minWidth: 40,
      color: "#FFFFFF",
    };
  }

  return (
    <>
      <Grid item xs={setting ? 6 : match ? 6 : 12}>
        <Button
          variant="outlined"
          fullWidth={!match}
          classes={{
            root: [sharedClasses.button, sharedClasses.greenButton].join(" "),
            label: !scrolled ? sharedClasses.buttonLabel : "",
          }}
          style={styles}
        >
          {greenText}
        </Button>
      </Grid>

      <Grid item xs={setting ? 6 : match ? 6 : 12}>
        <Button
          variant="outlined"
          classes={{
            root: [sharedClasses.button, sharedClasses.blueButton].join(" "),
            label: !scrolled ? sharedClasses.buttonLabel : "",
          }}
          style={styles}
        >
          {blueText}
        </Button>
      </Grid>
    </>
  );
}

ControlButtons.defaultProps = {
  blueText: "درخواست",
  greenText: "ارسال",
  setting: false,
  scrolled: false,
};

ControlButtons.propTypes = {
  blueText: propTypes.string,
  greenText: propTypes.string,
  setting: propTypes.bool,
  scrolled: propTypes.bool,
};

export default ControlButtons;
