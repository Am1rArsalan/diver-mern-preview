import React, { useState } from "react";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import SettingMenu from "./SettingMenu";
import SettingContent from "./SettingContent";

function AdvanceSetting() {
  return "Advance Setting";
}

export default function Settings({ children }) {
  const [show, setShow] = useState(true);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction={match ? "column" : "row"}
      justify="space-around"
      className="page"
    >
      <SettingMenu handleShowContent={() => setShow(true)} />
      {show ? (
        <SettingContent closeContent={() => setShow(false)}>
          {children}
        </SettingContent>
      ) : null}
    </Grid>
  );
}
