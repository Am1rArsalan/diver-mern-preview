import React from "react";
import HomeIcon from "./icons/HomeIcon";
import SettingIcon from "./icons/SettingIcon";
import { NavLink } from "react-router-dom";
import useSharedStyles from "./useShareStyles";
import useStyles from "./styles/SideBarStyles";
import { Grid } from "@material-ui/core";

export default function() {
  const classes = useStyles();
  const sharedClasses = useSharedStyles();
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <NavLink
          to="/"
          activeClassName={classes.activeLink}
          className={sharedClasses.text}
        >
          <Grid
            container
            justify="space-between"
            spacing={4}
            alignItems="center"
          >
            <Grid item xs={3}>
              <HomeIcon width={53} height={25} color="#ffffff" />
            </Grid>
            <Grid item xs={9}>
              {" "}
              تراکنشها{" "}
            </Grid>
          </Grid>
        </NavLink>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="space-between" spacing={4} alignItems="center">
          <Grid item xs={3}>
            <SettingIcon color="#FFFFFF" width={53} height={25} />
          </Grid>
          <Grid item xs={9}>
            <span className={sharedClasses.text}>
              <NavLink to="/contacts" activeClassName={classes.activeLink}>
                {" "}
                مخاطبین{" "}
              </NavLink>
            </span>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justify="space-between" spacing={4} alignItems="center">
          <Grid item xs={3}>
            <SettingIcon color="#FFFFFF" width={53} height={25} />
          </Grid>
          <Grid item xs={9}>
            <span className={sharedClasses.text}>
              <NavLink to="/setting" activeClassName={classes.activeLink}>
                تنظیمات
              </NavLink>
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

