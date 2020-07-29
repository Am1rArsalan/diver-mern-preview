import React  from "react";
import {
  makeStyles,
} from "@material-ui/core/styles";
import {
  BottomNavigationAction,
  BottomNavigation,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import HomeIcon from './../UI/icons/HomeIcon' ;
import SettingIcon from './../UI/icons/SettingIcon' ;
import ContactIcon from './../UI/icons/SettingIcon' ;
import { Link } from "@reach/router";

const useMobileNavStyles = makeStyles({
  root: {
      justifyContent : "space-around"
  },
});

export default function() {
  const classes = useMobileNavStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      classes={{ root  : classes.root}}
    >
      <Link to="/setting">
        <BottomNavigationAction label="مخاطبین" icon={<ContactIcon />} />
      </Link>
      <Link to="/">
        <BottomNavigationAction label="تراکنش ها" icon={<HomeIcon />} />
      </Link>

      <Link to="/contacts">
        <BottomNavigationAction label="scacasca" icon={<SettingIcon />} />
      </Link>
    </BottomNavigation>
  );
}
