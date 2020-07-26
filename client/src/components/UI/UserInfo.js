import React from "react";
import { Grid, Badge } from "@material-ui/core";
import CameraSvg from "../../assets/camera.svg";
import useSharedStyles from "./useShareStyles";
import UserAvatar from "./UserAvatar";
import SmallAvatar from "./SmallAvatar";
import PropTypes from "prop-types";

//UserInfo
function UserInfo({ name, username, image }) {
  const sharedClasses = useSharedStyles();

  return (
    <Grid style={{ marginBottom: "2.1rem" }} item position="relative">
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid style={{ marginBottom: "1rem", marginTop: ".8rem" }} item xs={12}>
          <Grid container justify="center">
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={<SmallAvatar alt="Remy Sharp" src={CameraSvg} />}
            >
              <UserAvatar width={100} height={100}  src={image} />
            </Badge>
          </Grid>
        </Grid>

        <Grid item xs={12} className={sharedClasses.text}>
          {name}
        </Grid>

        <Grid
          item
          xs={12}
          className={sharedClasses.text}
          style={{
            color: "#969696",
          }}
        >
          <span>{username}</span>
        </Grid>
      </Grid>
    </Grid>
  );
}

UserInfo.defaultProps = {
  name: "",
  username: "",
  image: "",
};

UserInfo.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  image : PropTypes.string ,
};

export default UserInfo;
