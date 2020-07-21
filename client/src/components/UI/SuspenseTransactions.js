import React, { useState, useEffect, Fragment } from "react";

function Placeholder() {
  return (
    <div
      style={{
        margin: "0 5px",
        boxShadow: "0 2px 4px #ccc",
        paddingTop: "10px",
        width:"20%"
      }}
    >
      <div
        style={{
          border: "2px solid #caca",
          backgroundColor: "#eee",
        }}
      >
        {" "}

          Place Holder Will Come Here
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "150px",
          marginTop: "10px",
        }}
      ></div>
    </div>
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

