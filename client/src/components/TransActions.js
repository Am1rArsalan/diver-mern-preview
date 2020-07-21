import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  List,
  useMediaQuery,
  ListItem,
  ListItemAvatar,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UserAvatar from "./UI/UserAvatar";
import useSharedClasses from "./UI/useShareStyles";
import SuspenseTransactions from "./UI/SuspenseTransactions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    marginBottom: 40,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
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
}));

function TransAction() {
  const classes = useStyles();
  const sharedClasses = useSharedClasses();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ListItem classes={{ root: classes.listItem }}>
      <ListItemAvatar>
        <UserAvatar />
      </ListItemAvatar>
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Grid
            container
            direction={match ? "column" : "row-reverse"}
            justify="space-between"
          >
            <Grid>
              <Typography
                classes={{ root: sharedClasses.text }}
                style={{
                  fontSize: match ? 18 : 25,
                  paddingTop: 5,
                }}
              >
                <Typography
                  classes={{ root: sharedClasses.text }}
                  style={{
                    fontSize: match ? 9 : 15,
                    color: "#A9A9A9",
                  }}
                  component="span"
                >
                  دریافت از{" "}
                </Typography>
                <Typography
                  classes={{ root: sharedClasses.text }}
                  style={{
                    fontSize: match ? 12 : 28,
                    color: "#333333",
                  }}
                  component="span"
                >
                  مسعود امجد
                </Typography>
              </Typography>
              <Typography
                classes={{
                  root: [sharedClasses.text, sharedClasses.alignRight].join(
                    " "
                  ),
                }}
                component="p"
                style={{
                  fontSize: match ? 8 : 12,
                  color: "#969696",
                }}
              >
                دنگ شام دیشب
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction={match ? "column" : "row-reverse"}
            justify="space-between"
          >
            <Grid>
              <Typography
                classes={{ root: sharedClasses.text }}
                style={{
                  fontSize: match ? 18 : 25,
                  paddingTop: 5,
                }}
              >
                {" "}
                ۳۵۰.۰۰۰{" "}
              </Typography>
              <Typography
                classes={{
                  root: [sharedClasses.text, sharedClasses.alignLeft].join(" "),
                }}
                component="p"
                style={{
                  fontSize: match ? 8 : 12,
                  color: "#C8C8C8",
                }}
              >
                {" "}
                تومان{" "}
              </Typography>
            </Grid>
            <Grid>
              <Typography
                classes={{
                  root: [
                    //sharedClasses.text,
                    sharedClasses.alignLeft,
                  ].join(" "),
                }}
                component="p"
                style={{
                  fontSize: match ? 8 : 15,
                  color: "#969696;",
                }}
              >
                ۱۲:۳۲
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
}

function generateContacts() {
  let conatcts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => (
    <TransAction />
  ));
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

function Placeholder() {
  return (
      "Place Hoder That Will Come for the transActions"
  );
}


export default function () {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const transActions = useContacts();

  useEffect(() => {
    console.log("Hello World ", transActions);
  });
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.demo}>
            <List dense={dense}>
              {/* transActions  */}

              <SuspenseTransactions
                condition={transActions.length > 0}
                placeholder={Placeholder}
                multiplier={20}
                initialDelay={200}
              >
                 {transActions }
              </SuspenseTransactions>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
