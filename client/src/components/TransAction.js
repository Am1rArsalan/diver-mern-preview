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
import useScrollPos from "../hooks/useScrollPos";

const useStyles = makeStyles((theme) => ({
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

function convertToPersian(number) {
  let en_number = number.toString();
  let persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  let persianMap = persianDigits.split("");
  return en_number.replace(/\d/g, function (m) {
    return persianMap[parseInt(m)];
  });
}

export default function ({ data }) {
  const classes = useStyles();
  const sharedClasses = useSharedClasses();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    console.log("Hello oooooo", match);
  });
  return (
    <ListItem classes={{ root: classes.listItem }}>
      <ListItemAvatar>
        <UserAvatar />
      </ListItemAvatar>
      <Grid container justify="space-between" alignItems="center">
        <Grid item sm={!match ? 8 : 0}>
          <Grid
            container
            direction={match ? "column" : "row-reverse"}
            justify="space-between"
          >
            <Grid item style={{ width: "100%" }}>
              <Grid
                container={!match}
                alignItems="center"
                justify="space-between"
              >
                <Typography
                  classes={{ root: sharedClasses.text }}
                  style={{
                    fontSize: match ? 18 : 25,
                    paddingTop: 5,
                      textAlign:"right"
                  }}
                >
                  <Typography
                    classes={{ root: sharedClasses.text }}
                    style={{
                      fontSize: match ? 9 : 16,
                      color: "#A9A9A9",
                    }}
                    component="span"
                  >
                    {data.done ? (
                      data.recived ? (
                        "دریافت از"
                      ) : (
                        "ارسال به"
                      )
                    ) : data.recived ? (
                      <span style={{ color: "#0AB571" }}>درخواست شما از</span>
                    ) : (
                      <span style={{ color: "#F93737" }}> درخواست </span>
                    )}
                  </Typography>
                  <Typography
                    classes={{ root: sharedClasses.text }}
                    style={{
                      fontSize: match ? 12 : 20,
                      color: "#333333",
                      marginRight: 5,
                    }}
                    component="span"
                  >
                    {data.from.name}
                    {!data.done && !data.recived ? (
                      <span
                        style={{ fontSize: match ? 9 : 15, color: "#F93737" }}
                      >
                        {" "}
                        از شما{" "}
                      </span>
                    ) : null}
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
                    fontSize: match ? 8 : 15,
                    color: "#969696",
                    //marginLeft : "3rem",
                      width : !match ? 150  : 250,
                      textAlign : !match ?  "center" : "right" ,
                      textOverflow : "ellipsis" ,
                      whiteSpace: 'nowrap' ,
                      overflow: 'hidden' ,
                  }}
                >
                  {data.des}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item  sm={!match ?3  : 0}>
          <Grid
            container
            direction={match ? "column" : "row-reverse"}
            justify="space-between"
            alignItems="center"
          >
            <Grid>
              <Typography
                classes={{ root: sharedClasses.text }}
                style={{
                  fontSize: match ? 18 : 25,
                  paddingTop: 5,
                }}
              >
                {convertToPersian(data.amount)}
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
