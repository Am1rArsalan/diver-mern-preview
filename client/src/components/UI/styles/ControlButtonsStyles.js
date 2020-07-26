import { makeStyles } from "@material-ui/core/styles";


// controllButtons Style
export default makeStyles((theme) => ({
  root: {
    width: 40,
    height: 32,
    minWidth: 40,
  },
  rootLabel: {
    fontSize: 8,
    color : theme.palette.common.white
  },
} , { index : 1 }));
