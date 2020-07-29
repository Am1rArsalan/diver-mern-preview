import React  from "react";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Hidden } from "@material-ui/core";
import useSharedStyles from "../UI/useShareStyles";
import ControlButtons from "../UI/ControlButtons";
import UserAvatar from "../UI/UserAvatar";
import { FaSearch } from "react-icons/fa";
import SearchBar from "../UI/SearchBar";
import Amount from "../UI/Amount";
import useHeader from "../../hooks/useHeader";
import useHeaderStyles from "../UI/styles/HeaderStyles";
import {useSelector} from "react-redux";


// Header
export default function () {
  const classes = useHeaderStyles();
  const sharedClasses = useSharedStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
  const matchVerySmall = useMediaQuery("(max-width:375px)");
  const { showSerchBar, toggleShowSearchBar, scrolled } = useHeader();
  let headerClasse =
    scrolled && match ? classes.headerScrolled : classes.headerScrollTop;

  let state =  useSelector(state => state.user ) ;
  return (
    <Grid conatiner={match} direction="row"  style={{ marginBottom : !match ? 16 : 0  }}  >
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
              //margin: match ? 0 : "1.4rem",
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
                <Amount
                    amount={state.user ? state.user.data.amount: "Loading....."}
                  />
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
