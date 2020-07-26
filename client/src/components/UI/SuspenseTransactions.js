import React, { useState, useEffect, Fragment } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import useStyles from "../UI/styles/TransActionItemStyles";


function Placeholder() {
  const classes = useStyles();


  return (
    <ListItem classes={{ root: classes.listItem }}>
      <ListItemAvatar>
       <Avatar
         alt="Travis Howard"
         className="transActionPlaceHolder"
         style={{
            color : "transparent"
         }}
        />
      </ListItemAvatar>
        <Grid container justify="space-between" alignItems="center" className="transActionPlaceHolder" style={{ borderRadius :"2rem" , color :"transparent"}}> ""</Grid>
    </ListItem>
  );
}


function useSuspense(props) {
  const [component, setComponent] = useState([]);
  //const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (props.isChecked && props.checkOnce) {
      setComponent([props.children]);
      return;
    }
    let delay = props.initialDelay || 0;
    let delayTimeout = null;

    if (props.condition) {
      if (props.initialDelay) {
        delayTimeout = setTimeout(() => {
          setComponent([props.children]);
        }, delay);
      } else {
        setComponent([props.children]);
      }
    } else {
      let tempComponent = [];
      let tempMultiplier= props.multiplier || 1;
      for (let i = 0; i < tempMultiplier; i++) {
        tempComponent.push(<Placeholder key={i} />);
      }
      setComponent(tempComponent);
    }

    return () => {
      if (delayTimeout) {
        clearTimeout(delayTimeout);
      }
    };
  }, [props.condition, props.children]);
 return component;
}


export default function(props) {
  const component = useSuspense(props);
  return (
    <Fragment>
      {component.map((cmp, index) => (
        <Fragment key={index}>{cmp}</Fragment>
      ))}
    </Fragment>
  );
}

