import React, { useEffect, useState } from "react";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Fab,
  Typography,
  IconButton,
  Hidden,
} from "@material-ui/core";
import { FiPlus } from "react-icons/fi";
import useSharedStyles from "../UI/useShareStyles";
import HeaderBack from "../../assets/prominent header.svg";
import Plus from "../../assets/main plus.svg";
import ControlButtons from "../UI/ControlButtons";
import UserAvatar from "../UI/UserAvatar";
import { FaSearch } from "react-icons/fa";
import SearchBar from "../UI/SearchBar";
import useScrollPos from "../../hooks/useScrollPos";
import Amount from  "../UI/Amount" ;
import useHeader from '../../hooks/useHeader' ;


export default function () {
  const classes = useHeaderStyles();
  const sharedClasses = useSharedStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
  const matchVerySmall = useMediaQuery("(max-width:375px)");
  const [showSerchBar, toggleShowSearchBar, scrolled] = useHeader();
  let headerClasse =
    scrolled && match ? classes.headerScrolled : classes.headerScrollTop;

  return (
    <Grid conatiner={match} direction="row">
      <Grid
        xs={12}
        item
        className={[sharedClasses.root, classes.header, headerClasse].join(" ")}
      >
        <Grid
          container
          direction={matchXs ? (scrolled ? "row" : "column") : "row-reverse"}
          justify={matchXs ? "flex-start" : "center"}
          alignItems="center"
          style={{
            flexWrap: match && scrolled ? "nowrap" : "wrap",
          }}
        >
          <Grid
            sm={5}
            item
            style={{
              paddingTop: 11,
              margin: match ? 0 : "1.4rem",
              width: "95%",
              margin: "auto",
            }}
          >
            <Grid container alignItems="center" justify="space-around">
              {match ? (
                <Grid item style={{ marginLeft: 30 }}>
                  <Grid container alignItems="center" justify="space-between">
                    {matchXs ? (
                      <>
                        <UserAvatar scrolled={scrolled} />
                        <FaSearch
                          style={{ marginRight: scrolled ? 10 : 20 }}
                          className={classes.searchButton}
                          onClick={toggleShowSearchBar}
                        />
                      </>
                    ) : null}

                    {scrolled && !matchVerySmall ? (
                      <Grid item>
                        <Grid
                          container
                          justify="center"
                          alignItems="center"
                          spacing={2}
                        >
                          <ControlButtons scrolled={scrolled} />
                        </Grid>
                      </Grid>
                    ) : null}
                  </Grid>
                </Grid>
              ) : null}

              <Grid item>
                 <Amount/>
              </Grid>
            </Grid>
          </Grid>

          {match && !scrolled ? (
            <Grid sm={5} item style={{ width: "100%", textAlign: "center" }}>
              <Grid container justify="center" alignItems="center">
                <ControlButtons scrolled={scrolled} />
              </Grid>
            </Grid>
          ) : null}

          <Hidden xsDown mdUp>
            <Grid sm={1} item>
              <UserAvatar width={70} height={70} />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      {showSerchBar && matchXs ? <SearchBar /> : null}
    </Grid>
  );
}

const useHeaderStyles = makeStyles((theme) => ({
  header: {
    height: 96,
    background: `url("${HeaderBack}")`,
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  headerScrolled: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
      position: "fixed",
      width: "100%",
      height: 70,
      zIndex: 6666,
    },
  },
  headerScrollTop: {
    //marginBottom: 16,
    //paddingTop: 20,
    //paddingBottom: 20,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 8,
    },
  },
  fabLabel: {
    fontSize: "4rem",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: "6rem",
    },
  },
  fab: {
    //background: "#0AB571",
    //border: "1px solid #FFFFFF",
    background: `url("${Plus}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxSizing: "border-box",
    boxShadow: "0.5px 0.5px 1px rgba>(0, 0, 0, 0.15)",
    [theme.breakpoints.down("xs")]: {
      width: "35px",
      height: "35px",
    },
  },
  fabSize: { width: 32, height: 32 },
  searchButton: {
    padding: 5,
    borderRadius: 15,
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0 2px 4px #aaa",
    },
  },
  labelSize: {
    fontSize: 8,
    lineHeight: 14,
  },
  amountWrapper: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "18rem",
      left: "6px",
    },
  },
}));
