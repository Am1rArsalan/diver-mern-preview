import React from "react";
import { Grid } from "@material-ui/core";
import useSharedStyles from "../UI/useShareStyles";
import ControlButtons from "../UI/ControlButtons";
import { useSelector } from "react-redux";
import useStyles from "../UI/styles/SideBarStyles";
import UserInfo from "../UI/UserInfo";
import SideNavigationList from "../UI/SideNavigation";

export default function () {
  const classes = useStyles();
  const sharedClasses = useSharedStyles();
  const state = useSelector((state) => state.user);
  return (
    <Grid
      item
      classes={{
        root: [sharedClasses.root, classes.root, classes.sideBackground].join(
          " "
        ),
        //"grid-xs-2": classes.sideSize,
      }}
      style={{ paddingTop: "2.5rem", width: 160 }}
      xs={2}
      md={2}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
      >
        <UserInfo
          name={state.user ? state.user.data.name : "Loading..."}
          username={state.user ? state.user.data.username : null}
        />
        <Grid
          item
          xs={12}
          style={{
            marginBottom: "2.1rem",
          }}
        >
          <SideNavigationList />
        </Grid>
        <ControlButtons />
      </Grid>
    </Grid>
  );
}
