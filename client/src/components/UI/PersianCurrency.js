import React from 'react' ;
import {
  useMediaQuery,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import useSharedClasses from "./useShareStyles";
import {
    toPersianNum , currencyFormat
} from '../../helpers/' ;


export default function PersianCurrency({ amount }) {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const sharedClasses = useSharedClasses();
  return (
    <Typography
      component="span"
      classes={{
        root: sharedClasses.text,
      }}
      style={{
       fontSize: match ? 18 : 25,
        paddingTop: 5,
      }}
    >
        {toPersianNum(currencyFormat(amount))}
    </Typography>
  );
}

