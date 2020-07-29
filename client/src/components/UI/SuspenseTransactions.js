import React , {  Fragment } from "react";
import useSuspense from '../../hooks/useSuspense' ;

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

