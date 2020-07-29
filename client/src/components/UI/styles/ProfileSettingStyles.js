import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(
  () => ({
    myClass: {
      "& label": {
        top: 11,
        fontSize: 14,
        textAlign: "right",
        width: "19rem",
      },
      "& input": {
          fontSize: 14
      },
    },
  }),
  { index: 1 }
);

