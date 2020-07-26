import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  Grid,
  Hidden,
  ListItem,
  ListItemText,
  List,
  useMediaQuery,
} from "@material-ui/core";
import SuspenseTransactions from "../components/UI/SuspenseTransactions";
import useScrollPos from "../hooks/useScrollPos";
import TransAction from "./TransAction";
import useTransActionStyles from "../components/UI/styles/TransActionStyles";
import useTransActions from "../hooks/useTransActions";

export default function () {
  const classes = useTransActionStyles();
  const [dense, setDense] = useState(false);
  const transActions = useTransActions();
  const scrollPos = useScrollPos();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {/*
      <Hidden smDown>
        <Grid xs={12}>
             This List Styles Hard Coded And Will be Change !
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <span className={[classes.listItemText]} style={{ right : "5rem" }}>تراکنش</span>
            </ListItem>
            <ListItem className={classes.listItem}>
              <span className={classes.listItemText}   style={{ left : "2rem" }}>توضیحات </span>
            </ListItem>
            <ListItem className={classes.listItem}>
              <span className={classes.listItemText} style={{ left : "-2rem" }} >تاریخ </span>
            </ListItem>
            <ListItem className={classes.listItem}>
              <span className={classes.listItemText}  style={{ left : "3rem" }} >مبلغ </span>
            </ListItem>
          </List>
        </Grid>
      </Hidden>
*/}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.demo}>
            <List
              dense={dense}
              style={{ marginTop: scrollPos !== 0 && match ? 100 : "auto" }}
            >
              <SuspenseTransactions
                condition={transActions.length > 0}
                placeholder={Placeholder}
                multiplier={20}
                initialDelay={200}
              >
                {transActions.map((item, i) => {
                  return <TransAction data={item} key={i} />;
                })}
              </SuspenseTransactions>
            </List>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

function Placeholder() {
  return "Place Hoder That Will Come for the transActions";
}
