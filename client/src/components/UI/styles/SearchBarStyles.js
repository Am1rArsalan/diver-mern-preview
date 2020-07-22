import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    width: 288,
    height: 24,
    borderRadius: 5,
    width: "100%",
    padding: 4,
  },
  searchBarInp: {
    background: "#E7E7E7",
  },
  inp: {
    position: "relative",
    top: -7,
  },
  scrollMargin: {
    position: "absolute",
    marginTop: 78,
    marginLeft: "-140px",
    left: "50%",
  },
}));
