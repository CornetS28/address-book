import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

// Images
// import logo from "../../images/logo.png";
// import footerLogo from "../../images/logo.png";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

// Utils
import styles from '../../utils/styles';

const Footer = (props) => {
  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  };
  const { classes } = props;

  return (
    <>
      <Divider className={classes.divider} />
      <Grid spacing={10} className={classes.footerWrapper}>
        <p className={classes.copyWriteText}>
          Designed and developed by{" "}
          <a
            href="https://github.com/CornetS28"
            target="_blank"
            className={classes.copyWriteLink}
          >
            Samuel Cornet
          </a>
        </p>
      </Grid>
    </>
  );
};


Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
