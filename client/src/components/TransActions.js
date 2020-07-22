import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { List, useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SuspenseTransactions from "./UI/SuspenseTransactions";
import useScrollPos from "../hooks/useScrollPos";
import TransAction from "./TransAction";

const useStyles = makeStyles((theme) => ({
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
}));

function generateContacts() {
  let conatcts = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => <TransAction />);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(conatcts);
    }, 1000);
  });
}

function useContacts() {
  const [conatcts, setContacts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await generateContacts();
    setContacts(res);
  };
  return conatcts;
}

export default function () {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const transActions = useContacts();
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
                condition={transActions.length > 0}
                placeholder={Placeholder}
                multiplier={20}
                initialDelay={200}
              >
                {transActions}
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
