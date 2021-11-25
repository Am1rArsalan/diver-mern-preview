import React from "react";
import HomeIcon from "./icons/HomeIcon";
import SettingIcon from "./icons/SettingIcon";
import { Grid } from "@material-ui/core";
import SideNavigationItem from "./SideNavigationItem";

export default function () {
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      spacing={2}
    >
      <SideNavigationItem name="تراکنشها" Icon={HomeIcon} link="/" />
      <SideNavigationItem name="مخاطبین" Icon={SettingIcon} link="/contacts" />
      <SideNavigationItem name="تنظیمات" Icon={SettingIcon} link="/setting" />
    </Grid>
  );
}
