import React, { useEffect, useState } from "react";
import { useTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Hidden } from "@material-ui/core";
import appTheme from "../../components/UI/theme";
import SideNav from "./SideBar";
import MobileNav from "../UI/MobileNav";
import Header from "../UI/Header";

function useScrollPosition() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPosition ;
}

export default function ({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollPosition = useScrollPosition() ;

  return (
    <ThemeProvider theme={appTheme}>
      <Grid
        className={classes.root}
        container={!match}
        justify="center"
        spacing={2}
      >
        <Hidden smDown>
          <SideNav />
        </Hidden>
        <Grid item className={classes.content} xs={match ? 12 : 7}>

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

const useStyles = makeStyles((theme) => ({
  root: {
    padding: ".6rem 0",
    direction: "rtl",
    //height: "100vh",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  content: {
    height: "100%",
  },
  contentArea: { maxWidth: "99" },
}));
