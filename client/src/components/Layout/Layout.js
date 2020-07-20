import React, { useEffect } from "react";
import {
  useTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import {
  useMediaQuery,
  Grid,
  Fab,
  Hidden,BottomNavigationAction,
  Typography,BottomNavigation
} from "@material-ui/core";
import appTheme from "../../components/UI/theme";
import { FiPlus } from "react-icons/fi";
import useSharedStyles from "../UI/useShareStyles";
import SideNav from "./SideBar";
import { NavLink } from "react-router-dom";

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
  header: {
    height: 96,
    marginBottom: 16,
    paddingTop: 20,
    paddingBottom: 20,

    [theme.breakpoints.down("xs")]: {
      height: 128,
    },
  },
  fabLabel: { fontSize: "4rem", color: "#fff" },
  fab: {
    background: "#0AB571",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    boxShadow: "0.5px 0.5px 1px rgba>(0, 0, 0, 0.15)",
  },
}));

export default function ({ children }) {
  const classes = useStyles();
  const sharedClasses = useSharedStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    console.log("*********************", match);
  });
  return (
    <ThemeProvider theme={appTheme}>
      <Grid
        className={classes.root}
        container={!match}
        justify="center"
        spacing={2}
      >
          <Hidden smDown>
              <SideNav/>
          </Hidden>
          <Grid item className={classes.content} xs={match ? 12 : 7}>
          <Grid xs={12} item className={[sharedClasses.root, classes.header].join(" ")}>
            <Grid container justify="flex-end" style={{ paddingLeft: 16 }}>
              <Grid item style={{ margin: "1.4rem" }}>
                <Typography
                  classes={{ root: sharedClasses.text }}
                  style={{ fontSize: "4rem" }}
                >
                  {" "}
                  ۳۵۰.۰۰۰{" "}
                </Typography>
                <Typography
                  classes={{ root: sharedClasses.text }}
                  component="span"
                >
                  {" "}
                  تومان{" "}
                </Typography>
              </Grid>
              <Fab classes={{ label: classes.fabLabel, root: classes.fab }}>
                <FiPlus />
              </Fab>
            </Grid>
          </Grid>

          <Grid item style={{ height: 596 }}>
              {children}
              <Grid item style={{ position:"fixed" , bottom : 0  }}>
                 {match ? <MobileNav/> : null }
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


let SettingIcon = () => {
    return (
    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 2.89441H1" stroke="#333333" stroke-linecap="round"/>
        <path d="M21 10.0099H1" stroke="#333333" stroke-linecap="round"/>
        <path d="M21 17.3175H1" stroke="#333333" stroke-linecap="round"/>
        <path d="M18.1696 2.70208C18.1696 3.90832 17.1809 4.89439 15.9511 4.89439C14.7213 4.89439 13.7327 3.90832 13.7327 2.70208C13.7327 1.49584 14.7213 0.509766 15.9511 0.509766C17.1809 0.509766 18.1696 1.49584 18.1696 2.70208Z" fill="#FAFAFA" stroke="#333333"/>
        <path d="M10.7911 10.0098C10.7911 11.2161 9.80247 12.2021 8.57269 12.2021C7.34292 12.2021 6.35425 11.2161 6.35425 10.0098C6.35425 8.80358 7.34292 7.8175 8.57269 7.8175C9.80247 7.8175 10.7911 8.80358 10.7911 10.0098Z" fill="#FAFAFA" stroke="#333333"/>
        <path d="M16.6168 17.3174C16.6168 18.5237 15.6282 19.5097 14.3984 19.5097C13.1686 19.5097 12.1799 18.5237 12.1799 17.3174C12.1799 16.1112 13.1686 15.1251 14.3984 15.1251C15.6282 15.1251 16.6168 16.1112 16.6168 17.3174Z" fill="#FAFAFA" stroke="#333333"/>
    </svg>

    )
}

let ContactIcon = () => {
    return (
        <svg wiVdth="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 2.89441H1" stroke="#333333" stroke-linecap="round"/>
            <path d="M21 10.0099H1" stroke="#333333" stroke-linecap="round"/>
            <path d="M21 17.3175H1" stroke="#333333" stroke-linecap="round"/>
            <path d="M18.1696 2.70208C18.1696 3.90832 17.1809 4.89439 15.9511 4.89439C14.7213 4.89439 13.7327 3.90832 13.7327 2.70208C13.7327 1.49584 14.7213 0.509766 15.9511 0.509766C17.1809 0.509766 18.1696 1.49584 18.1696 2.70208Z" fill="#FAFAFA" stroke="#333333"/>
            <path d="M10.7911 10.0098C10.7911 11.2161 9.80247 12.2021 8.57269 12.2021C7.34292 12.2021 6.35425 11.2161 6.35425 10.0098C6.35425 8.80358 7.34292 7.8175 8.57269 7.8175C9.80247 7.8175 10.7911 8.80358 10.7911 10.0098Z" fill="#FAFAFA" stroke="#333333"/>
            <path d="M16.6168 17.3174C16.6168 18.5237 15.6282 19.5097 14.3984 19.5097C13.1686 19.5097 12.1799 18.5237 12.1799 17.3174C12.1799 16.1112 13.1686 15.1251 14.3984 15.1251C15.6282 15.1251 16.6168 16.1112 16.6168 17.3174Z" fill="#FAFAFA" stroke="#333333"/>
        </svg>
    )
}

let HomeIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3951 11.133L13.2321 2.97201C12.887 2.62784 12.4194 2.43457 11.9321 2.43457C11.4447 2.43457 10.9772 2.62784 10.6321 2.97201L2.47506 11.127L2.46706 11.133C2.21492 11.386 2.04181 11.7068 1.9688 12.0564C1.8958 12.406 1.92606 12.7693 2.0559 13.102C2.18574 13.4347 2.40955 13.7225 2.70006 13.9302C2.99058 14.1379 3.33524 14.2567 3.69206 14.272H3.74906H4.07406V20.272C4.07353 20.5557 4.12897 20.8367 4.2372 21.0989C4.34542 21.3611 4.50431 21.5994 4.70477 21.8002C4.90522 22.0009 5.1433 22.1601 5.40538 22.2687C5.66745 22.3773 5.94838 22.4331 6.23206 22.433H9.42106C9.57648 22.433 9.72553 22.3713 9.83542 22.2614C9.94532 22.1515 10.0071 22.0024 10.0071 21.847V17.141C10.0073 16.8804 10.111 16.6305 10.2953 16.4462C10.4796 16.2619 10.7294 16.1583 10.9901 16.158H12.8731C13.1337 16.1583 13.3836 16.2619 13.5679 16.4462C13.7521 16.6305 13.8558 16.8804 13.8561 17.141V21.849C13.8561 22.0044 13.9178 22.1535 14.0277 22.2634C14.1376 22.3733 14.2866 22.435 14.4421 22.435H17.6321C18.2034 22.4345 18.7513 22.2073 19.1553 21.8032C19.5593 21.3992 19.7865 20.8514 19.7871 20.28V14.28H20.0871C20.4509 14.2792 20.8063 14.1707 21.1085 13.9682C21.4107 13.7657 21.6462 13.4782 21.7852 13.142C21.9243 12.8059 21.9607 12.4361 21.8898 12.0792C21.8189 11.7224 21.644 11.3945 21.3871 11.137L21.3951 11.133Z" stroke="#3041D0"/>
        </svg>
    )
}

const useMobileNavStyles = makeStyles({
  root: {
    //width: 500,
      //position : "fixed", bottom: 0 , width:'100%'
  },
});

function MobileNav() {
  const classes = useMobileNavStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
       <NavLink to="/setting">
          <BottomNavigationAction label="مخاطبین" icon={<ContactIcon />} />
       </NavLink>
        <NavLink to="/">
           <BottomNavigationAction label="تراکنش ها" icon={<HomeIcon/>} />
        </NavLink>

        <NavLink to="/contacts">
         <BottomNavigationAction label="تنظیمات" icon={<SettingIcon />} />
        </NavLink>
    </BottomNavigation>
  );
}

