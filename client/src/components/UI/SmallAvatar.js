import { withStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

export default withStyles(() => ({
  root: {
    padding: ".5rem",
    width: "16px",
    height: "16px",
    background: "rgba(255, 255, 255, 0.4)",
    boxShadow: "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(3px)",
    "&:hover": {
      cursor: "pointer",
    },
  },
}))(Avatar);
