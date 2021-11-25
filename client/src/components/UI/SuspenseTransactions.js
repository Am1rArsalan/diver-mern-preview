import React, { Fragment } from "react";
import useSuspense from "../../hooks/useSuspense";

export default function SuspenseTransactions(props) {
  const component = useSuspense(props);
  return (
    <Fragment>
      {component.map((cmp, index) => (
        <Fragment key={index}>{cmp}</Fragment>
      ))}
    </Fragment>
  );
}
