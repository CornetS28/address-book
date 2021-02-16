import React from 'react';
import PropTypes from 'prop-types';

// MUI Stuff
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

// Utils
import styles from '../../utils/styles';
import logo from '../../utils/images/logo.svg';

const Navbar = ({ classes }) => (
  <>
    <div className={classes.navigationWrapper}>
      <AppBar position="fixed">
        <Toolbar className={classes.navbarContainer}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer">
            <div edge="start" className={classes.logoWrapper}>
              <img src={logo} alt="logo" className={classes.logo} />
            </div>
          </IconButton>
          <Typography className={classes.navHeader} variant="h6" noWrap>
            Address Book
          </Typography>
        </Toolbar>
        <Divider className={classes.divider} />
      </AppBar>
    </div>
  </>
);

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Navbar);
