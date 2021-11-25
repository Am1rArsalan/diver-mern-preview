import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  ListItem,
  ListItemAvatar,
  Hidden,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UserAvatar from "../components/UI/UserAvatar";
import useSharedClasses from "../components/UI/useShareStyles";
import useStyles from "../components/UI/styles/TransActionItemStyles";
import propTypes from "prop-types";
import { convertToPersainDate } from "../helpers/";
import PersianCurrency from "../components/UI/PersianCurrency";

function TransAction({ data }) {
  const classes = useStyles();
  const sharedClasses = useSharedClasses();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <ListItem classes={{ root: classes.listItem }}>
      <ListItemAvatar>
        <UserAvatar />
      </ListItemAvatar>
      <Grid container justify="space-between" alignItems="center">
        <Grid item sm={!match ? 8 : 0} md={7}>
          <Grid
            container
            direction={matchXs ? "column" : "row-reverse"}
            justify="space-between"
          >
            <Grid item style={{ width: "100%" }}>
              <Grid
                container={!matchXs}
                alignItems="center"
                justify="flex-start"
              >
                <Grid>
                  <Typography
                    classes={{ root: sharedClasses.text }}
                    style={{
                      fontSize: match ? 18 : 25,
                      paddingTop: 5,
                      textAlign: "right",
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
                      {data.user !== data.from._id ? (
                        !data.req ? (
                          data.recived ? (
                            "دریافت از"
                          ) : (
                            "ارسال به"
                          )
                        ) : data.recived ? (
                          <span style={{ color: "#0AB571" }}>
                            درخواست شما از
                          </span>
                        ) : (
                          <span style={{ color: "#F93737" }}> درخواست </span>
                        )
                      ) : data.recived ? (
                        "شارژ دایور "
                      ) : (
                        "برداشت از دایور"
                      )}
                    </Typography>
                    <Typography
                      classes={{ root: sharedClasses.text }}
                      style={{
                        fontSize: match ? 12 : 17,
                        color: "#333333",
                        marginRight: 5,
                      }}
                      component="span"
                    >
                      {data.user !== data.from._id ? data.from.name : ""}
                      {data.req &&
                      !data.recived &&
                      data.user !== data.from._id ? (
                        <>
                          <span
                            style={{
                              fontSize: match ? 9 : 15,
                              color: "#F93737",
                            }}
                          >
                            {" "}
                            از شما{" "}
                          </span>
                        </>
                      ) : null}
                    </Typography>
                  </Typography>
                  <Hidden smDown>
                    {data.req ? (
                      data.accepted ? (
                        <span
                          className={classes.reqBadge}
                          style={{
                            background: "#0AB571",
                          }}
                        >
                          پذیرفته شد
                        </span>
                      ) : (
                        <span
                          className={classes.reqBadge}
                          style={{
                            background: "#F93737",
                          }}
                        >
                          رد شد
                        </span>
                      )
                    ) : null}
                  </Hidden>
                </Grid>
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
                    width: !match ? 150 : 250,
                    textAlign: !match ? "center" : "right",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {data.des}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={!match ? 3 : 0} md={5}>
          <Grid
            container
            direction={match ? "column" : "row-reverse"}
            justify="space-between"
            alignItems="center"
          >
            <Grid>
              <PersianCurrency amount={data.amount} />
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
                  root: [sharedClasses.text, sharedClasses.alignLeft].join(" "),
                }}
                component="p"
                style={{
                  fontSize: match ? 8 : 15,
                  color: "#969696;",
                }}
              >
                {convertToPersainDate(data.createdAt)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
}

TransAction.propTypes = {
  data: {
    recived: true,
    req: false,
    accepted: false,
    des: "",
    from: {
      name: "",
    },
  },
};

TransAction.propTypes = {
  data: propTypes.object,
};

export default TransAction;
