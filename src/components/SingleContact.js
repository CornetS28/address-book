import React from 'react';
import PropTypes from 'prop-types';

// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

// Utils
import styles from '../utils/styles';

const SingleContact = (props) => {
  const { classes, image, fullname, email, phone, age } = props;
  return (
    <Paper variant="outlined" className={classes.singleContact}>
      <Grid className={classes.avatarContainer}>
        <div edge="start">
          <Avatar className={classes.user}>
            <img src={image} alt="logo" className={classes.photo} />
          </Avatar>
        </div>
        <div className={classes.fullname}>
          <p>{fullname}</p>
        </div>
      </Grid>
      <Grid container spacing={0} item xs={11} sm={11} className={classes.moreInfo}>
        <div className={classes.details}>
          <div className={classes.leftStaticText}>Phone:</div>
          <div className={classes.rightUserData}>{phone}</div>
        </div>
        <div className={classes.details}>
          <div className={classes.leftStaticText}>Email:</div>
          <div className={classes.rightUserDataEmail}>{email}</div>
        </div>
        <div className={classes.details}>
          <div className={classes.leftStaticText}>Age:</div>
          <div className={classes.rightUserData}>{age}</div>
        </div>
      </Grid>
    </Paper>
  );
};

SingleContact.propTypes = {
  classes: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default withStyles(styles)(SingleContact);
