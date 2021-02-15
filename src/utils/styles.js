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
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
    },
  },
  searchWrapper: {
    [theme.breakpoints.down(600)]: {
      marginLeft: 10,
      marginRight: 10,
    },
  },
  search: {
    width: "70%",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    height: 40,
    marginTop: 15,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.up("xs")]: {
      width: "100%",
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

  //Homepage
  homePageWrapper: {
    backgroundColor: theme.palette.primary.main,
   height: "90vh",
    overflowY: "scroll",
  },
  headerAndFilterWrapper: {
    margin: "80px auto auto auto",
    [theme.breakpoints.down(600)]: {
      margin: "40px auto auto auto",
    },
  },
  header: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontFamily: theme.palette.font.HelveticaNeue,
    fontStyle: "bold",
    paddingLeft: 10,
    paddingTop: 5,
    color: theme.palette.color.white,
    [theme.breakpoints.down(600)]: {
      fontSize: 16,
    },
  },
  filterWrapper: {
    [theme.breakpoints.down(600)]: {
      marginLeft: 10,
      marginRight: 10,
    },
  },
  filterContainer: {
    width: "80%",
    float: "right",
    marginTop: 15,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingRight: -10,
    },
  },
  sortBy: {
    fontFamily: theme.palette.font.HelveticaNeue,
    paddingLeft: 10,
    backgroundColor: theme.palette.secondary.main,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    height: 40,
    margin: "auto",
    textAlign: "center",

    [theme.breakpoints.down(600)]: {
      paddingLeft: -20,
    },
  },
  sortByText: {
    marginTop: 12,
    [theme.breakpoints.down(600)]: {
      // marginLeft: -15,
    },
  },

  selecltFieldInput: {
    width: "95%",
    height: 25,
    paddingBottom: 20,
    borderRadius: 0,
  },
  inputColor: {
    color: theme.palette.color.yellow,
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
  },
  divider2: {
    backgroundColor: theme.palette.secondary.main,

    [theme.breakpoints.down(600)]: {
      marginLeft: 10,
      marginRight: 10,
    },
  },

  select: {
    backgroundColor: "#262626",
    color: "white",
    width: "100%",
  },
  smallEmpptySpace: {
    height: 20,
  },
  contactsWrapper: {
    margin: "40px auto auto auto",
    [theme.breakpoints.down(960)]: {
      margin: "20px auto auto auto",
    },
    [theme.breakpoints.down(600)]: {
      margin: "40px auto auto auto",
    },
  },
  contactsSubWrapper: {
    [theme.breakpoints.down(412)]: {
      height: "440px",
    },
  },

  gitHub: {
    marginBottom: 30,
    [theme.breakpoints.down(600)]: {
      marginLeft: 10,
      marginRight: 10,
    },
  },

  contactContainer: {
    marginBottom: 10,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  singleContact: {
    backgroundColor: theme.palette.color.gray,
    width: "95%",
    margin: "auto",
    "&:hover": {
      backgroundColor: "#2B2B2C",
    },
  },
  avatarContainer: {
    display: "flex",
  },
  user: {
    width: "50px",
    height: "50px",
    margin: "10px",
  },
  photo: {
    width: "100%",
    height: "50px",
  },
  fullname: {
    fontFamily: theme.palette.HelveticaNeue,
    color: theme.palette.secondary.main,
    marginTop: 10,
  },
  moreInfo: {
    margin: "auto",
    paddingBottom: 20,
  },
  details: {
    display: "flex",
    width: "100%",
    height: 20,
  },
  leftStaticText: {
    width: "30%",
    color: theme.palette.color.red,
  },
  rightUserData: {
    color: theme.palette.color.white,
  },
  gitHubRepo: {
    margin: "0px auto auto auto",
    textAlign: "center",
    backgroundColor: theme.palette.color.gray,
    color: theme.palette.color.white,
  },
  // Modal
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  // Loading more
  loadingMoreContact: {
    margin: "20px auto auto auto",
    marginBottom: 40,
    paddingBottom: 20,
    textAlign: "center",
    backgroundColor: theme.palette.color.red,
    [theme.breakpoints.down(600)]: {
      margin: "20px 10px 20px 10px",
    },
  },

  circularProgress: {
    top: 15,
    marginLeft: 30,
    position: "relative",
  },

  // Full details of user
  userFullDetailsWrapper: {
    backgroundColor: theme.palette.color.gray,
    width: "95%",
    margin: "auto",
    "&:hover": {
      backgroundColor: "#2B2B2C",
    },
  },

  // Footer
  footerWrapper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: "5px 0",
    textAlign: "center",
    boxShadow: "0 1px 10px rgba(164,164,164,.15)",
    fontFamily: theme.palette.HelveticaNeue,
    bottom: 0,

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
