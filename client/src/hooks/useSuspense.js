import React from 'react' ;
import { useEffect , useState } from 'react' ;

export default function (props) {
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
        tempComponent.push(<props.placeholder key={i} />);
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
