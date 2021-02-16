import React from 'react';
import PropTypes from 'prop-types';

// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

// Utils
import styles from '../utils/styles';

const FullUserDetails = ({ classes, user }) => (
  <Grid item sx={12} sm={12}>
    <Paper variant="outlined" className={classes.userFullDetailsWrapper}>
      <Grid className={classes.avatarContainer}>
        <div edge="start">
          <Avatar className={classes.user}>
            <img src={user.picture.medium} alt="logo" className={classes.photo} />
          </Avatar>
        </div>
        <div className={classes.fullname}>
          <p>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</p>
        </div>
      </Grid>
      <Grid container spacing={1} item xs={11} sm={12} className={classes.moreInfo}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={classes.moreDetails}>
            <div className={classes.leftStaticText}>Phone:</div>
            <div className={classes.rightUserData}>{user.phone}</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={classes.moreDetails}>
            <div className={classes.leftStaticText}>Country:</div>
            <div className={classes.rightUserData}>{user.location.country}</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={classes.moreDetails}>
            <div className={classes.leftStaticText}>State:</div>
            <div className={classes.rightUserData}>{user.location?.state}</div>
          </div>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={4} lg={4}>
            <div className={classes.moreDetails}>
              <div className={classes.leftStaticText}>Street:</div>
              <div className={classes.rightUserData}>
                {user.location?.street}
              </div>
            </div>
          </Grid> */}
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={classes.moreDetails}>
            <div className={classes.leftStaticText}>Postal Code:</div>
            <div className={classes.rightUserData}>{user.location?.postcode}</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={classes.moreDetails}>
            <div className={classes.leftStaticText}>Coordinates:</div>
            <div className={classes.rightUserData}>
              {`${user.location.coordinates?.longitude}.${user.location.coordinates?.latitude}`}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={classes.moreDetails}>
            <div className={classes.leftStaticText}>ID:</div>
            <div className={classes.rightUserData}>{(user.id?.name, +' ' + user.id?.value)}</div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={classes.moreDetails}>
            <div className={classes.leftStaticText}>Age:</div>
            <div className={classes.rightUserData}>{user.dob.age}</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={classes.moreDetails}>
            <div className={classes.leftStaticText}>Username:</div>
            <div className={classes.rightUserData}>{user.login.username}</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={classes.moreDetails}>
            <div className={classes.leftStaticText}>Email:</div>
            <div className={classes.rightUserData}>{user.email}</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={classes.moreDetails}>
            <div className={classes.leftStaticText}>Password:</div>
            <div className={classes.rightUserData}>{user.login.password}</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={classes.moreDetails}>
            <div className={classes.leftStaticText}>Cell:</div>
            <div className={classes.rightUserData}>{user.cell}</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={classes.moreDetails}>
            <div className={classes.leftStaticText}>Time-zone:</div>
            <div className={classes.rightUserData}>{user.location.timezone?.offset}</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={classes.moreDetails}>
            <div className={classes.leftStaticText}>Nationality:</div>
            <div className={classes.rightUserData}>{user.nat}</div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
);

FullUserDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullUserDetails);
