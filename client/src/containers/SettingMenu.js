import React from "react";
import {
  Grid,
  useMediaQuery,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BsCardList } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { IoMdContact, IoMdLogOut, IoIosCamera } from "react-icons/io";
import useSharedStyles from "../components/UI/useShareStyles";
import ControllButtons from "../components/UI/ControlButtons";
import { Link } from "@reach/router";

const useSettingItemStyles = makeStyles(
  (theme) => ({
    root: {
      borderBottom: "1px solid #F1F1F1",
      "&:hover": {
        boxShadow: "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.25)",
        cursor: "pointer",
      },
    },
    rootText: {
      color: "#333333",
      textAlign: "right",
    },
  }),
  { index: 1 }
);

function SettingMenuItem({ icon, text, showContent, link }) {
  const classes = useSettingItemStyles();
  return (
    <Link to={link}>
      <ListItem className={classes.root} onClick={showContent}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} className={classes.rootText} />
      </ListItem>
    </Link>
  );
}

export default function ({ handleShowContent }) {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const sharedClasses = useSharedStyles();
  return (
    <Grid
      item
      xs={match ? 12 : 6}
      style={{ backgroundColor: "#fff" }}
      className={sharedClasses.contentBox}
    >
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        style={{ paddingTop: 48 }}
      >
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <ControllButtons
              blueText="برداشت از دیوار"
              greenText="شارژ دایور"
              setting
            />
          </Grid>

          <Grid item>
            <Grid container justify="flex-start">
              <List style={{ width: "100%" }}>
                <SettingMenuItem
                  showContent={handleShowContent}
                  text="کد QR"
                  icon={<IoIosCamera size="2em" />}
                  link="qrCode"
                />
                <SettingMenuItem
                  text="کارتهای من"
                  showContent={handleShowContent}
                  icon={<BsCardList size="2em" />}
                  link="myCards"
                />
                <SettingMenuItem
                  text="پروفایل"
                  icon={<IoMdContact size="2em" />}
                  showContent={handleShowContent}
                  link="profile"
                />
                <SettingMenuItem
                  text="تنظیمات پیشرفته "
                  icon={<FiSettings size="2em" />}
                  showContent={handleShowContent}
                  link="advanceSetting"
                />
                <SettingMenuItem
                  text="دربارهی ما"
                  icon={<IoMdLogOut size="2em" />}
                  showContent={handleShowContent}
                  link="logout"
                />
                <SettingMenuItem
                  link="logout"
                  text="خروج"
                  icon={<IoMdLogOut size="2em" />}
                />
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
