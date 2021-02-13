import React from "react";

// MUI Stuff
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

// Utils
import styles from '../../utils/styles';
import logo from "../../utils/images/logo.svg";

// Components

import Search from "../Search"


const Navbar = ({classes}) => {

 
  return (
    <>
      <div className={classes.navigationWrapper}>
        <AppBar position="fixed">
          <Toolbar className={classes.navbarContainer}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <div edge="start" className={classes.logoWrapper}>
                <img src={logo} alt="logo" className={classes.logo} />
              </div>
            </IconButton>
            <Typography className={classes.navHeader} variant="h6" noWrap>
              Address Book
            </Typography>
            {/* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "helvetica neue": "search" }}
              />
            </div> */}
            <Search/>
          </Toolbar>
            <Divider className={classes.divider} />
        </AppBar>
      </div>
    </>
  );
};
export default withStyles(styles)(Navbar);
