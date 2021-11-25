import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "@material-ui/core";

const SettingIcon = (props) => {
  return (
    <SvgIcon
      width={props.width}
      height={props.height}
      viewBox="24,24"
      className={props.className}
    >
      <path d="M22 4.89429H2" stroke={props.color} strokeLinecap="round" />
      <path d="M22 12.0098H2" stroke={props.color} strokeLinecap="round" />
      <path d="M22 19.3174H2" stroke={props.color} strokeLinecap="round" />
      <path
        d="M19.1697 4.70202C19.1697 5.90825 18.181 6.89433 16.9512 6.89433C15.7215 6.89433 14.7328 5.90825 14.7328 4.70202C14.7328 3.49578 15.7215 2.5097 16.9512 2.5097C18.181 2.5097 19.1697 3.49578 19.1697 4.70202Z"
        fill={props.backgroundColor}
        stroke={props.color}
      />
      <path
        d="M11.7911 12.0098C11.7911 13.2161 10.8025 14.2021 9.57269 14.2021C8.34292 14.2021 7.35425 13.2161 7.35425 12.0098C7.35425 10.8036 8.34292 9.8175 9.57269 9.8175C10.8025 9.8175 11.7911 10.8036 11.7911 12.0098Z"
        fill={props.backgroundColor}
        stroke={props.color}
      />
      <path
        d="M17.6168 19.3174C17.6168 20.5237 16.6282 21.5097 15.3984 21.5097C14.1686 21.5097 13.1799 20.5237 13.1799 19.3174C13.1799 18.1112 14.1686 17.1251 15.3984 17.1251C16.6282 17.1251 17.6168 18.1112 17.6168 19.3174Z"
        fill={props.backgroundColor}
        stroke={props.color}
      />
    </SvgIcon>
  );
};

export default SettingIcon;

SettingIcon.defaultProps = {
  className: "",
  color: "#333333",
  backgroundColor: "#FAFAFA",
  width: 24,
  height: 24,
};

SettingIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
