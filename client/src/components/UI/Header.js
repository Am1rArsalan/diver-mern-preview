import React, { useEffect, useState } from "react";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Fab,
  Typography,
} from "@material-ui/core";
import { FiPlus } from "react-icons/fi";
import useSharedStyles from "../UI/useShareStyles";
import HeaderBack from "../../assets/prominent header.svg";
import ControlButtons from "../UI/ControlButtons";
import UserAvatar from "../UI/UserAvatar";
import { FaSearch } from "react-icons/fa";
import SearchBar from "../UI/SearchBar";
//width: scrolled && match ? "95%" : 'auto'


export default function ({ scrolled }) {
  const classes = useHeaderStyles();
  const sharedClasses = useSharedStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
  const [showSerchBar, setSearchBar] = useState(false);
  const matchVerySmall = useMediaQuery('(max-width:375px)');
  let headerClasse =
    scrolled && match ? classes.headerScrolled : classes.headerScrollTop;

  useEffect(() => {
      console.log('xs' , matchXs)
      console.log('sm' , match)
      console.log('matchVerySmall' , matchVerySmall)
  })


  return (
    <Grid conatiner={match} direction="row">
      <Grid
        xs={12}
        item
        className={[sharedClasses.root, classes.header, headerClasse].join(" ")}
      >
        <Grid
          container
          direction={match ? ( scrolled ? "row" :   "column"  ) : "row"}
          justify={match ? "flex-start" : "flex-end"}
          alignItems="center"
          style={{ paddingLeft: 16 , flexWrap : match  && scrolled ? "nowrap": "wrap"  }}
        >
            <Grid item style={{ paddingTop : 11 , margin: match ? 0 : "1.4rem"  }}>
            <Grid container alignItems="center" justify="space-around">
              {match ? (
                <Grid item style={{ marginLeft: 30 }}>
                  <Grid container alignItems="center" justify="space-between">
                    <UserAvatar scrolled={scrolled} />
                    <FaSearch
                        style={{ marginRight: scrolled ? 10: 20 }}
                      className={classes.searchButton}
                      onClick={() => setSearchBar(!showSerchBar)}
                    />
                      {scrolled && !matchVerySmall ?
                        <Grid item>
                          <Grid container justify="center" alignItems="center" spacing={2}>
                            <ControlButtons scrolled={scrolled} />
                          </Grid>
                        </Grid> : null
                      }
                  </Grid>
                </Grid>
              ) : null}


             <Grid item>
                 <Grid container alignItems="center">
              <Grid item>
                  { !scrolled  ? (
                        <Typography

                  classes={{
                    root: [
                      sharedClasses.text,
                      sharedClasses.alignRight,
                      scrolled ? classes.laelSize : "",
                    ].join(" "),
                  }}
                          component="p"
                         >
                              {" "}
                              موجودی{" "}
                            </Typography>)
                            :
                        null
                  }
                <Typography
                  classes={{ root: sharedClasses.text }}
                  style={{
                    fontSize: match ? (!scrolled ? 30 : 16) : "40px",
                    paddingTop: 5,
                  }}
                >
                  {" "}
                  ۳۵۰.۰۰۰.۰۰۰ {" "}
                </Typography>
                <Typography
                  classes={{
                    root: [
                      sharedClasses.text,
                      sharedClasses.alignLeft,
                      scrolled ? classes.laelSize : "",
                    ].join(" "),
                  }}
                  component="p"
                >
                  {" "}
                  تومان{" "}
                </Typography>
              </Grid>

              <Grid item style={{ marginRight: 8 }}>
                <Fab classes={{ label: classes.fabLabel, root: classes.fab }}>
                    <FiPlus />
                </Fab>
              </Grid>
               </Grid>
            </Grid>




            </Grid>
          </Grid>
          {match && !scrolled  ? (
            <Grid item>
              <Grid container justify="center" alignItems="center" spacing={2}>
                <ControlButtons scrolled={scrolled} />
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
      {showSerchBar && matchXs ? <SearchBar /> : null}
    </Grid>
  );
}

const useHeaderStyles = makeStyles((theme) => ({
  header: {
    background: `url("${HeaderBack}")`,
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
    //height: 96,
    marginBottom: 16,
    paddingTop: 20,
    paddingBottom: 20,
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
    background: "#0AB571",
    border: "1px solid #FFFFFF",
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
}));
