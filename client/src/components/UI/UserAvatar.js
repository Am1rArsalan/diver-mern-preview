import React from "react";
import {
  useTheme,
} from "@material-ui/core/styles";
import {
  useMediaQuery,
  Avatar,
} from "@material-ui/core";
import User from "../../assets/avatar.svg";
import useScrollPos from '../../hooks/useScrollPos' ;


export default function UserAvatar({width , height}) {
  const scrollPos = useScrollPos() ;
  const scrolled = scrollPos !== 0 ;
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("xs"));
  const matchMedium = useMediaQuery(theme.breakpoints.down("md"));

  console.log("amir is here" ,scrolled , matchMedium , match);

  return (
    <Avatar
      alt="Travis Howard"
      src={User}
      style={{
          width , height
      }}
    />
  );
}

          //width: match ?  (scrolled ? 36  : 40) : ( matchMedium ? 70 : 110 ),
          //height: match   ?  ( scrolled ? 36 :40) : ( matchMedium ? 70  : 100 ) ,
