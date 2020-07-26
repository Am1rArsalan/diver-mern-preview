import React  from "react";
import UserAvatar from "../components/UI/UserAvatar";
import { Switch as SwitchRouter, Route } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import {
  Badge,
  Grid,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@material-ui/core";
import CameraSvg from "./../assets/camera.svg";
import SmallAvatar from "../components/UI/SmallAvatar";
import { makeStyles } from "@material-ui/core/styles";
import useSharedStyles from "../components/UI/useShareStyles";
import { useSelector } from "react-redux";
import ProfileSetting from './ProfileSetting' ;









function AdvanceSetting() {
  return "this is advanceSetting ";
}

const useSettingContentStyles = makeStyles(
  (theme) => ({
    root: {
      position: "relative",
    },
    backButton: {
      position: "absolute",
      top: 2,
      left: 0,
      color: theme.palette.common.white,
    },
    rootHeader: {
      height: 96,
      backgroundColor: theme.palette.common.blue,
      borderRadius: 10,
      marginBottom: 43,
    },
  }),
  { index: 1 }
);

export default function ({ closeContent }) {
  // when other setting Components added tis component  will be changed
  const classes = useSettingContentStyles();
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const sharedClasses = useSharedStyles();
  return (
    <Grid
      item
      xs={match ? 12 : 6}
      className={[sharedClasses.contentBox, classes.root].join(" ")}
    >
      <Grid container direction="column" position="relative">
        <IconButton onClick={closeContent} className={classes.backButton}>
          <IoIosArrowBack />
        </IconButton>
        <Grid className={classes.rootHeader} item>
          <Grid item style={{ transform: "translateY(43px)" }}>
            <UserAvatar width={96} height={96} />
          </Grid>

          <Grid>
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              style={{ float: "left", transform: "translate(32px, -4px)" }}
              badgeContent={<SmallAvatar alt="Remy Sharp" src={CameraSvg} />}
            ></Badge>
          </Grid>
        </Grid>
        <Grid xs={12} item style={{ textAlign: "center" }}>
          <SwitchRouter>
            <Route path="/setting/profile" component={ProfileSetting} />
            <Route path="/setting/advanceSetting" component={AdvanceSetting} />
          </SwitchRouter>
        </Grid>
      </Grid>
    </Grid>
  );
}
