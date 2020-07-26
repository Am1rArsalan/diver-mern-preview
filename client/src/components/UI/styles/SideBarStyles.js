import { makeStyles} from "@material-ui/core/styles";
import SideBack from "../../../assets/toolbar menu.svg";

export default makeStyles(() => ({
  sideBackground: {
    background: `url("${SideBack}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  root: {
    //height :684
  },
  activeLink: {
    fontWeight: "500",
    fontSize: "18px",
  },
}), { index :  1});

