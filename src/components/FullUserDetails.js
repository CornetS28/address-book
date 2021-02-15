import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

// Utils
import styles from "../utils/styles";

const FullUserDetails = ({ classes, user, key }) => {
  return (
    <Grid item sx={12} sm={12} key={key}>
      <Paper variant="outlined" className={classes.userFullDetails}>
        <Grid className={classes.avatarContainer}>
          <div edge="start">
            <Avatar className={classes.user}>
              <img
                src={user.picture.medium}
                alt="logo"
                className={classes.photo}
              />
            </Avatar>
          </div>
          <div className={classes.fullname}>
            <p>{user.name.first + " " + user.name.last}</p>
          </div>
        </Grid>
        <Grid
          container
          spacing={0}
          item
          xs={11}
          sm={11}
          className={classes.moreInfo}
        >
          <div className={classes.details}>
            <div className={classes.leftStaticText}>Phone:</div>
            <div className={classes.rightUserDatad}>{user.phone}</div>
          </div>
          <div className={classes.details}>
            <div className={classes.leftStaticText}>Country:</div>
            <div className={classes.rightUserDatad}>
              {user.location.country}
            </div>
          </div>
          <div className={classes.details}>
            <div className={classes.leftStaticText}>Age:</div>
            <div className={classes.rightUserDatad}>{user.dob.age}</div>
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
};

FullUserDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullUserDetails);
