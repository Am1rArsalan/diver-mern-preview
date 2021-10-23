import React from "react";
import useSharedStyles from "./useShareStyles";
import useStyles from "./styles/SideBarStyles";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link , Match } from "@reach/router";

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
            ontWeight :  isCurrent ? "bolder": 100  ,
            fontSize : isCurrent ? 18 : 14
        },
      };
    }}
  />
);

function SideNavigationItem({ name, Icon, link }) {
  const sharedClasses = useSharedStyles();
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Grid container justify="space-between" spacing={4} alignItems="center">
        <Grid item xs={3}>
          <Icon color="#FFFFFF" width={53} height={25} />
        </Grid>
        <Grid item xs={9}>
          <span className={sharedClasses.text}>
            <NavLink to={link}>{name}</NavLink>
          </span>
        </Grid>
      </Grid>
    </Grid>
  );
}

SideNavigationItem.defaultProps = {
  link: "/",
  name: "",
};

SideNavigationItem.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  Icon: PropTypes.object,
};

export default SideNavigationItem;
