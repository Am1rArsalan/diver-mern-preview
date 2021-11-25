import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Fab, Typography } from "@material-ui/core";
import useSharedStyles from "../UI/useShareStyles";
import useHeader from "../../hooks/useHeader";
import useStyles from "../UI/styles/AmountStyles";
import PersianCurrency from "./PersianCurrency";

export default function ({ amount }) {
  const classes = useStyles();
  const sharedClasses = useSharedStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
  const { scrolled } = useHeader();

  return (
    <Grid container alignItems="center" className={classes.amountWrapper}>
      <Grid item>
        {!scrolled ? (
          <Typography
            classes={{
              root: [
                sharedClasses.text,
                sharedClasses.alignRight,
                scrolled ? classes.laelSize : "",
              ].join(" "),
            }}
            component="p"
          >
            موجودی
          </Typography>
        ) : null}
        <Typography
          classes={{ root: sharedClasses.text }}
          style={{
            fontSize: match ? (!scrolled ? 30 : 16) : "40px",
            paddingTop: 5,
            transform: matchXs ? (scrolled ? "translateY(5px)" : "") : "",
          }}
        >
          <PersianCurrency amount={amount ? amount : 0} />
        </Typography>
        <Typography
          classes={{
            root: [
              sharedClasses.text,
              sharedClasses.alignLeft,
              scrolled ? classes.laelSize : "",
            ].join(" "),
          }}
          component="p"
        >
          تومان
        </Typography>
      </Grid>

      <Grid item style={{ marginRight: 8 }}>
        <Fab classes={{ label: classes.fabLabel, root: classes.fab }}></Fab>
      </Grid>
    </Grid>
  );
}
