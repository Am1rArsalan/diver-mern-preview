import React  from "react";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Fab,
  Typography,
} from "@material-ui/core";
import useSharedStyles from "../UI/useShareStyles";
import HeaderBack from "../../assets/prominent header.svg";
import Plus from "../../assets/main plus.svg";
import useHeader from '../../hooks/useHeader' ;


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


export default function() {
  const classes = useHeaderStyles();
  const sharedClasses = useSharedStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
  const [showSerchBar,
        toggleShowSearchBar,
        scrolled] = useHeader();
  let headerClasse =
    scrolled && match ? classes.headerScrolled : classes.headerScrollTop;

  return (
    <Grid container alignItems="center" className={classes.amountWrapper}>
      <Grid item>
        {!scrolled ? (
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
          </Typography>
        ) : null}
        <Typography
          classes={{ root: sharedClasses.text }}
          style={{
            fontSize: match ? (!scrolled ? 30 : 16) : "40px",
            paddingTop: 5,
            transform: matchXs ? (scrolled ? "translateY(5px)" : "") : "",
          }}
        >
          {" "}
          ۳۵۰.۰۰۰.۰۰۰{" "}
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
        <Fab classes={{ label: classes.fabLabel, root: classes.fab }}></Fab>
      </Grid>
    </Grid>
  );
}
