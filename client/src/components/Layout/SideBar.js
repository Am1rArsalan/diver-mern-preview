import React from "react";
import {
  useTheme,
  makeStyles,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import { useMediaQuery, Grid, Badge, Avatar, SvgIcon, Button  , Fab , Typography } from "@material-ui/core";
import appTheme from "../../components/UI/theme";
import User from "../../assets/me2.jpg";
import  CameraSvg from '../../assets/camera.svg'
import { FiPlus } from 'react-icons/fi' ;
import useSharedStyles from '../UI/useShareStyles' ;
import Setting from "../Setting";
import { NavLink} from "react-router-dom";

const SmallAvatar = withStyles((theme) => ({
  root: {
      padding:".5rem" ,
      width: '16px' ,
      height: '16px' ,
      background: 'rgba(255, 255, 255, 0.4)' ,
      boxShadow: '1.5px 1.5px 1.5px rgba(0, 0, 0, 0.25)' ,
      backdropFilter: 'blur(3px)' ,
      "&:hover" : {
        cursor : "pointer"
      }
  },
}))(Avatar);






export default function(){
  const classes = useSideNavStyles();
  const sharedClasses = useSharedStyles() ;
   return (
      <Grid item  classes={{ root : sharedClasses.root  , 'grid-xs-2' : classes.sideSize  }}   style={{  paddingTop :"2.5rem"}}  xs={2}>
          <Grid container
                direction="column"
                alignItems="center"
                justify="space-evenly"
          >
            <Grid style={{ marginBottom:"2.1rem" }}  item  position="relative">
              <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
              >

                <Grid
                  style={{ marginBottom: "1rem", marginTop: ".8rem" }}
                  item
                  xs={12}
                >
                  <Grid container justify="center">
                    <Badge
                      overlap="circle"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                        badgeContent={<SmallAvatar alt="Remy Sharp" src={CameraSvg} />}
                    >
                      <Avatar
                        alt="Travis Howard"
                        src={User}
                        style={{
                          width: "110px",
                            height : "100px"
                        }}
                      />
                    </Badge>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={12}
                 className={sharedClasses.text}
                >
                    امیر احمدزاده
                </Grid>

                <Grid
                  item
                  xs={12}
                  className={sharedClasses.text}
                  style={{
                    color: "#969696",
                  }}
                >
                  <span> amir@ </span>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} style={{
                      marginBottom:"2.1rem"
                    }}  >
              <Grid container direction="column" justify="flex-start" alignItems="center" spacing={2}>

                <Grid item xs={12} >
                    <Grid container justify="space-between" spacing={4} alignItems="center">
                       <Grid item xs={3}>
                          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M26.5267 12.844L15.6427 1.96267C15.1825 1.50379 14.5592 1.24609 13.9094 1.24609C13.2595 1.24609 12.6362 1.50379 12.176 1.96267L1.30002 12.836L1.28935 12.844C0.953171 13.1813 0.722348 13.609 0.62501 14.0752C0.527672 14.5413 0.568022 15.0257 0.741142 15.4693C0.914263 15.9129 1.21268 16.2966 1.60003 16.5736C1.98737 16.8506 2.44693 17.0089 2.92268 17.0293H2.99868H3.43202V25.0293C3.43132 25.4076 3.50523 25.7823 3.64953 26.1319C3.79384 26.4815 4.00569 26.7993 4.27296 27.0669C4.54023 27.3345 4.85768 27.5468 5.20711 27.6916C5.55654 27.8364 5.93111 27.9109 6.30935 27.9107H10.5614C10.7686 27.9107 10.9673 27.8284 11.1138 27.6818C11.2604 27.5353 11.3427 27.3366 11.3427 27.1293V20.8547C11.343 20.5072 11.4812 20.174 11.727 19.9283C11.9727 19.6826 12.3058 19.5444 12.6533 19.544H15.164C15.5115 19.5444 15.8447 19.6826 16.0904 19.9283C16.3361 20.174 16.4743 20.5072 16.4747 20.8547V27.132C16.4747 27.3392 16.557 27.538 16.7035 27.6845C16.8501 27.831 17.0488 27.9133 17.256 27.9133H21.5093C22.2712 27.9126 23.0016 27.6097 23.5403 27.071C24.079 26.5323 24.382 25.8018 24.3827 25.04V17.04H24.7827C25.2677 17.039 25.7416 16.8943 26.1446 16.6243C26.5475 16.3543 26.8615 15.971 27.0469 15.5227C27.2323 15.0745 27.2808 14.5814 27.1863 14.1056C27.0919 13.6299 26.8586 13.1927 26.516 12.8493L26.5267 12.844Z" stroke="white"/>
                              </svg>
                       </Grid>
                        <Grid item xs={9}>
                            <NavLink to="/"  className={sharedClasses.text}>  تراکنشها </NavLink>
                        </Grid>
                    </Grid>
                </Grid>
                  <Grid item xs={12} >
                    <Grid container justify="space-between" spacing={4} alignItems="center">
                       <Grid item xs={3}>
                          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M26.5267 12.844L15.6427 1.96267C15.1825 1.50379 14.5592 1.24609 13.9094 1.24609C13.2595 1.24609 12.6362 1.50379 12.176 1.96267L1.30002 12.836L1.28935 12.844C0.953171 13.1813 0.722348 13.609 0.62501 14.0752C0.527672 14.5413 0.568022 15.0257 0.741142 15.4693C0.914263 15.9129 1.21268 16.2966 1.60003 16.5736C1.98737 16.8506 2.44693 17.0089 2.92268 17.0293H2.99868H3.43202V25.0293C3.43132 25.4076 3.50523 25.7823 3.64953 26.1319C3.79384 26.4815 4.00569 26.7993 4.27296 27.0669C4.54023 27.3345 4.85768 27.5468 5.20711 27.6916C5.55654 27.8364 5.93111 27.9109 6.30935 27.9107H10.5614C10.7686 27.9107 10.9673 27.8284 11.1138 27.6818C11.2604 27.5353 11.3427 27.3366 11.3427 27.1293V20.8547C11.343 20.5072 11.4812 20.174 11.727 19.9283C11.9727 19.6826 12.3058 19.5444 12.6533 19.544H15.164C15.5115 19.5444 15.8447 19.6826 16.0904 19.9283C16.3361 20.174 16.4743 20.5072 16.4747 20.8547V27.132C16.4747 27.3392 16.557 27.538 16.7035 27.6845C16.8501 27.831 17.0488 27.9133 17.256 27.9133H21.5093C22.2712 27.9126 23.0016 27.6097 23.5403 27.071C24.079 26.5323 24.382 25.8018 24.3827 25.04V17.04H24.7827C25.2677 17.039 25.7416 16.8943 26.1446 16.6243C26.5475 16.3543 26.8615 15.971 27.0469 15.5227C27.2323 15.0745 27.2808 14.5814 27.1863 14.1056C27.0919 13.6299 26.8586 13.1927 26.516 12.8493L26.5267 12.844Z" stroke="white"/>
                           </svg>
                       </Grid>
                        <Grid item xs={9}><span className={sharedClasses.text}>
                            <NavLink  to="/contacts">  مخاطبین </NavLink>
                        </span></Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} >
                    <Grid container justify="space-between" spacing={4}  alignItems="center">
                        <Grid item xs={3}>
                          <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M26.5267 12.844L15.6427 1.96267C15.1825 1.50379 14.5592 1.24609 13.9094 1.24609C13.2595 1.24609 12.6362 1.50379 12.176 1.96267L1.30002 12.836L1.28935 12.844C0.953171 13.1813 0.722348 13.609 0.62501 14.0752C0.527672 14.5413 0.568022 15.0257 0.741142 15.4693C0.914263 15.9129 1.21268 16.2966 1.60003 16.5736C1.98737 16.8506 2.44693 17.0089 2.92268 17.0293H2.99868H3.43202V25.0293C3.43132 25.4076 3.50523 25.7823 3.64953 26.1319C3.79384 26.4815 4.00569 26.7993 4.27296 27.0669C4.54023 27.3345 4.85768 27.5468 5.20711 27.6916C5.55654 27.8364 5.93111 27.9109 6.30935 27.9107H10.5614C10.7686 27.9107 10.9673 27.8284 11.1138 27.6818C11.2604 27.5353 11.3427 27.3366 11.3427 27.1293V20.8547C11.343 20.5072 11.4812 20.174 11.727 19.9283C11.9727 19.6826 12.3058 19.5444 12.6533 19.544H15.164C15.5115 19.5444 15.8447 19.6826 16.0904 19.9283C16.3361 20.174 16.4743 20.5072 16.4747 20.8547V27.132C16.4747 27.3392 16.557 27.538 16.7035 27.6845C16.8501 27.831 17.0488 27.9133 17.256 27.9133H21.5093C22.2712 27.9126 23.0016 27.6097 23.5403 27.071C24.079 26.5323 24.382 25.8018 24.3827 25.04V17.04H24.7827C25.2677 17.039 25.7416 16.8943 26.1446 16.6243C26.5475 16.3543 26.8615 15.971 27.0469 15.5227C27.2323 15.0745 27.2808 14.5814 27.1863 14.1056C27.0919 13.6299 26.8586 13.1927 26.516 12.8493L26.5267 12.844Z" stroke="white"/>
                           </svg>
                       </Grid>
                        <Grid item xs={9}>

                       <NavLink to="/setting">
                          <span className={sharedClasses.text}>
                              تنظیمات
                        </span>
                       </NavLink>
                       </Grid>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={12}>
                <Button variant="outlined"
                    classes={{ root:[sharedClasses.button , sharedClasses.greenButton].join(' ') ,   label  : sharedClasses.buttonLabel}}
                > ارسال  </Button>
            </Grid>

            <Grid item xs={12}>
                <Button variant="outlined"
                    classes={{  root : [sharedClasses.button , sharedClasses.blueButton].join(' ') , label : sharedClasses.buttonLabel}}
                > درخواست  </Button>
            </Grid>
          </Grid>
        </Grid>
   )
}

const useSideNavStyles = makeStyles((theme) => ({
  avatarImage: {},
    sideSize : {
        flexGrow: 0 ,
        maxWidth: '13.667%' ,
        flexBasis: '13.667%'
    }
}));

const SideNavLeftVector = () => (
  <svg
    width="105"
    height="641"
    viewBox="0 0 105 641"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 583.455V0L105 99.5777L41.2025 199.656L105 293.729L92.8846 437.341L48.9663 641L0 583.455Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="-193.341"
        y1="147.615"
        x2="9.47169"
        y2="176.757"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const SideNavVectorTop = () => (
  <svg
    width="130"
    height="502"
    viewBox="0 0 130 502"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.2343 502L0.608887 417L9.42693 392.815L0.608976 283.5L58.8483 199.5L78.5002 68L113 0L129.5 63.5L9.42693 392.815L18.2343 502Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="378.519"
        y1="131"
        x2="97.5719"
        y2="123.392"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);


