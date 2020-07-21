import React from "react";
import {
  useTheme,
} from "@material-ui/core/styles";
import {
  useMediaQuery,
  Avatar,
} from "@material-ui/core";
import User from "../../assets/avatar.svg";

export default function UserAvatar({  scrolled }) {


  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const matchMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Avatar
      alt="Travis Howard"
      src={User}
      style={{
          width: match ?  (scrolled ? 36  : 40) : ( matchMedium ? 56 : 110 ),
          height: match   ?  ( scrolled ? 36 :40) : ( matchMedium ? 56 : 100 ) ,
      }}
    />
  );
}
