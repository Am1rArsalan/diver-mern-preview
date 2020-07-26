import React from "react";
import { Avatar } from "@material-ui/core";
import User from "../../assets/avatar.svg";
import PropTypes from 'prop-types' ;

function UserAvatar({ width, height , src }) {
  return (
    <Avatar
       alt="user name"
       src={src ? src : User}
       style={{
        width,
        height,
      }}
    />
  );
}


UserAvatar.defaultProps = {
  src : User
};

UserAvatar.propTypes = {
  width : PropTypes.number || PropTypes.string ,
  height : PropTypes.number || PropTypes.string,
  src  : PropTypes.string ,
};

export default  UserAvatar ;
