
import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

// Utils
import styles from "../utils/styles";

export const LoadingIndicator = ({classes}) => {
  return (
    <Grid container item xs={12} sm={12}>
      <Grid
        item
        xs={12}
        sm={7}
        md={6}
        lg={5}
        className={classes.loadingMoreContact}
      >
        <Typography variant="h6" className={classes.header}>
          Loading More{" "}
          <span className={classes.circularProgress}>
            {" "}
            <CircularProgress />
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LoadingIndicator);