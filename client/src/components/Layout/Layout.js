import React from "react";
import { useTheme, ThemeProvider } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Hidden } from "@material-ui/core";
import appTheme from "../../components/UI/theme";
import SideNav from "./SideBar";
import MobileNav from "./MobileNav";
import Header from "./Header";
import useScrollPosition from "../../hooks/useScrollPos";
import useStyles from "../UI/styles/LayoutStyles";

export default function Layout({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollPosition = useScrollPosition();

  return (
    <ThemeProvider theme={appTheme}>
      <Grid className={classes.root} container={!match} justify="space-around">
        <Hidden smDown>
          <SideNav />
        </Hidden>
        <Grid item className={classes.content} xs={12} md={9}>
          <Header scrolled={scrollPosition !== 0} />
          <Grid item xs={12} classes={{ root: classes.contentArea }}>
            {children}
            <Grid item style={{ position: "fixed", bottom: 0, width: "100%" }}>
              {match ? <MobileNav /> : null}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
