import theme from "../utils/theme";

// MUI Stuff
import { fade } from "@material-ui/core/styles";

const styles = (theme) => ({
  // Navbar
  navigationWrapper: {
    flexGrow: 1,
  },
  navbarContainer: {
    marginLeft: 40,
    marginRight: 40,
    [theme.breakpoints.down("sm")]: {
      marginLeft: -5,
      marginRight: 0,
    },
  },
  logo: {
    width: "40px",
    height: "40px",
    marginTop: -5,
    marginBottom: -5,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navHeader: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginLeft: 0,
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    width: 10,
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.main,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },

  // Footer
  footerWrapper: {
    marginToop: 20,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: "5px 0",
    textAlign: "center",
    boxShadow: "0 1px 10px rgba(164,164,164,.15)",
    fontFamily: theme.palette.HelveticaNeue,

    [theme.breakpoints.down("sm")]: {
      fontSize: 11,
    },
  },
  copyWriteLink: {
    color: theme.palette.color.red,
    "&:hover": {
      color: theme.palette.color.white,
    },
  },
});

export default styles;
