import React, { useState} from "react";
import { useTheme } from "@material-ui/core/styles";
import { List, useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SuspenseTransactions from "./UI/SuspenseTransactions";
import useScrollPos from "../hooks/useScrollPos";
import TransAction from "./TransAction";
import useTransActionStyles from './UI/styles/TransActionStyles';
import useTransActions from '../hooks/useTransActions';


export default function () {
  const classes = useTransActionStyles();
  const [dense, setDense] = useState(false);
  const state = useTransActions();
  const scrollPos = useScrollPos();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.demo}>
            <List
              dense={dense}
              style={{ marginTop: scrollPos !== 0 && match ? 100 : "auto" }}
            >
              <SuspenseTransactions
                condition={state.data.length > 0}
                placeholder={Placeholder}
                multiplier={20}
                initialDelay={200}
              >
                {state.data.map((item, i) => {
                  return <TransAction data={item} key={i} />;
                })}
              </SuspenseTransactions>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function Placeholder() {
  return "Place Hoder That Will Come for the transActions";
}
