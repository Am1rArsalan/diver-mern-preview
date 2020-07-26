// **** This Component and children Will be change
import React, { useState } from "react";
import {
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import SettingMenu  from './SettingMenu' ;
import SettingContent from './SettingContent' ;


export default function () {
  const [show, setShow] = useState(true);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction={match ? "column" : "row"} justify="space-around">
       <SettingMenu handleShowContent={() => setShow(true)} />
       {show ? <SettingContent closeContent={() => setShow(false)} /> : null}
    </Grid>
  );
}
