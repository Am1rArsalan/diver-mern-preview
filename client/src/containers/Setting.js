// **** This Component and children Will be change
import React, { useState, useEffect } from "react";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import SettingMenu from "./SettingMenu";
import SettingContent from "./SettingContent";
import ProfileSetting from "./ProfileSetting";


function AdvanceSetting() {
  return "Advance Setting";
}

export default function ({ children }) {
  const [show, setShow] = useState(true);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    console.log("Hello Amir is here", children);
  }, []);
  return (
    <Grid container direction={match ? "column" : "row"} justify="space-around"  className="page" >
      <SettingMenu handleShowContent={() => setShow(true)} />
      {show ? (
        <SettingContent closeContent={() => setShow(false)}>
          {children}
        </SettingContent>
      ) : null}
    </Grid>
  );
}
