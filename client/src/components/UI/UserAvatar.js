import React from "react";
import { Avatar } from "@material-ui/core";
import User from "../../assets/avatar.svg";

export default function ({ width, height }) {
  return (
    <Avatar
      alt="Travis Howard"
      src={User}
      style={{
        width,
        height,
      }}
    />
  );
}
