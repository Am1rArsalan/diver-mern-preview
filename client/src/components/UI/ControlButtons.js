import React from "react";
import useSharedStyles from "../UI/useShareStyles";
import { Grid, Button  , useMediaQuery} from "@material-ui/core";
import {  useTheme,} from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles  = makeStyles((theme) => ({
    size : {
       width : 40 , height : 32, } ,

    labelSize  : {
       fontSize : 8 , lineHeight: 14
    }
}))

export default  function ({ scrolled }) {
  const sharedClasses = useSharedStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles() ;

  return (
    <>
      <Grid item xs={match ? 6 : 12}>
        <Button
          variant="outlined"
          classes={{
            root: [sharedClasses.button, sharedClasses.greenButton, scrolled ? classes.size : ""].join(" "),
            label: [sharedClasses.buttonLabel , scrolled ?  classes.labelSize : ""].join(" "),
          }}

        >
          {" "}
          ارسال{" "}
        </Button>
      </Grid>

        <Grid item xs={match ? 6 : 12}>
        <Button
          variant="outlined"
          classes={{
              root: [sharedClasses.button, sharedClasses.blueButton , scrolled ? classes.size : ""].join(" "),
              label: [sharedClasses.buttonLabel , scrolled ? classes.labelSize : ""].join(" ") ,
          }}
        >
          {" "}
          درخواست{" "}
        </Button>
      </Grid>
    </>
  );
};
