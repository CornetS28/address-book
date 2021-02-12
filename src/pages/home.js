import React from "react";
import PropTypes from "prop-types";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

// Utils
import styles from "../utils/styles";
import ProfileImage from "../utils/images/profile.png";

const signerOptions = [
  {
    value: "1",
    label: "CH",
  },
  {
    value: "2",
    label: "ES",
  },
  {
    value: "3",
    label: "FR",
  },
  {
    value: "3",
    label: "GB",
  },
];

const Home = ({ classes }) => {
  const [signers, setSigners] = React.useState(1);

  const onSignerChange = (event) => {
    setSigners(event.target.value);
  };
  return (
    <Grid container className={classes.homePageWrapper}>
      <Grid
        container
        item
        xs={12}
        sm={10}
        className={classes.headerAndFilterWrapper}
      >
        <Grid item xs={12} sm={8}>
          <Typography variant="h6" className={classes.header}>
            Your contacts
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Grid container item sm={12} className={classes.filterContainer}>
            <Grid item xs={4} sm={4} className={classes.sortBy}>
              <p className={classes.sortByText}>Sort by</p>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Grid item xs={12} sm={12} className={classes.TextField2}>
                <FormControl
                  variant="outlined"
                  className={classes.selecltFieldInput}
                  size="small"
                  fullWidth
                  className={classes.formControl}
                >
                  <Select
                    className={classes.select}
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={signers}
                    onChange={onSignerChange}
                  >
                    {signerOptions.map((option) => (
                      <option
                        key={option.label}
                        value={option.value}
                        style={{
                          backgroundColor: "#000000",
                          color: "#F79905",
                          padding: 5,
                          textAlign: "center",
                        }}
                      >
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={11} sm={12} style={{ margin: "auto" }}>
          <Grid className={classes.smallEmpptySpace} />
          <Divider className={classes.divider} />
        </Grid>
      </Grid>

      <Grid container item xs={12} sm={10} className={classes.contactsWrapper}>
        <Grid
          container
          item
          xs={12}
          sm={9}
          className={classes.contactsSubWrapper}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.contactContainer}
          >
            <Paper variant="outlined" className={classes.singleContact}>
              <Grid className={classes.avatarContainer}>
                <div edge="start">
                  <Avatar className={classes.user}>
                    <img
                      src={ProfileImage}
                      alt="logo"
                      className={classes.photo}
                    />
                  </Avatar>
                </div>
                <div className={classes.fullname}>
                  <p>Samuel Cornet</p>
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
                  <div className={classes.rightUserData}>+509 7373-7377</div>
                </div>
                <div className={classes.details}>
                  <div className={classes.leftStaticText}>Email:</div>
                  <div className={classes.rightUserData}>samule@hall.me</div>
                </div>
                <div className={classes.details}>
                  <div className={classes.leftStaticText}>Address:</div>
                  <div className={classes.rightUserData}>23, Petion-Ville</div>
                </div>
              </Grid>
            </Paper>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.contactContainer}
          >
            <Paper variant="outlined" className={classes.singleContact}>
              <Grid className={classes.avatarContainer}>
                <div edge="start">
                  <Avatar className={classes.user}>
                    <img
                      src={ProfileImage}
                      alt="logo"
                      className={classes.photo}
                    />
                  </Avatar>
                </div>
                <div className={classes.fullname}>
                  <p>Samuel Cornet</p>
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
                  <div className={classes.rightUserData}>+509 7373-7377</div>
                </div>
                <div className={classes.details}>
                  <div className={classes.leftStaticText}>Email:</div>
                  <div className={classes.rightUserData}>samule@hall.me</div>
                </div>
                <div className={classes.details}>
                  <div className={classes.leftStaticText}>Address:</div>
                  <div className={classes.rightUserData}>23, Petion-Ville</div>
                </div>
              </Grid>
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.contactContainer}
          >
            <Paper variant="outlined" className={classes.singleContact}>
              <Grid className={classes.avatarContainer}>
                <div edge="start">
                  <Avatar className={classes.user}>
                    <img
                      src={ProfileImage}
                      alt="logo"
                      className={classes.photo}
                    />
                  </Avatar>
                </div>
                <div className={classes.fullname}>
                  <p>Samuel Cornet</p>
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
                  <div className={classes.rightUserData}>+509 7373-7377</div>
                </div>
                <div className={classes.details}>
                  <div className={classes.leftStaticText}>Email:</div>
                  <div className={classes.rightUserData}>samule@hall.me</div>
                </div>
                <div className={classes.details}>
                  <div className={classes.leftStaticText}>Address:</div>
                  <div className={classes.rightUserData}>23, Petion-Ville</div>
                </div>
              </Grid>
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.contactContainer}
          >
            <Paper variant="outlined" className={classes.singleContact}>
              <Grid className={classes.avatarContainer}>
                <div edge="start">
                  <Avatar className={classes.user}>
                    <img
                      src={ProfileImage}
                      alt="logo"
                      className={classes.photo}
                    />
                  </Avatar>
                </div>
                <div className={classes.fullname}>
                  <p>Samuel Cornet</p>
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
                  <div className={classes.rightUserData}>+509 7373-7377</div>
                </div>
                <div className={classes.details}>
                  <div className={classes.leftStaticText}>Email:</div>
                  <div className={classes.rightUserData}>samule@hall.me</div>
                </div>
                <div className={classes.details}>
                  <div className={classes.leftStaticText}>Address:</div>
                  <div className={classes.rightUserData}>23, Petion-Ville</div>
                </div>
              </Grid>
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.contactContainer}
          >
            <Paper variant="outlined" className={classes.singleContact}>
              <Grid className={classes.avatarContainer}>
                <div edge="start">
                  <Avatar className={classes.user}>
                    <img
                      src={ProfileImage}
                      alt="logo"
                      className={classes.photo}
                    />
                  </Avatar>
                </div>
                <div className={classes.fullname}>
                  <p>Samuel Cornet</p>
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
                  <div className={classes.rightUserData}>+509 7373-7377</div>
                </div>
                <div className={classes.details}>
                  <div className={classes.leftStaticText}>Email:</div>
                  <div className={classes.rightUserData}>samule@hall.me</div>
                </div>
                <div className={classes.details}>
                  <div className={classes.leftStaticText}>Address:</div>
                  <div className={classes.rightUserData}>23, Petion-Ville</div>
                </div>
              </Grid>
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.contactContainer}
          >
            <Paper variant="outlined" className={classes.singleContact}>
              <Grid className={classes.avatarContainer}>
                <div edge="start">
                  <Avatar className={classes.user}>
                    <img
                      src={ProfileImage}
                      alt="logo"
                      className={classes.photo}
                    />
                  </Avatar>
                </div>
                <div className={classes.fullname}>
                  <p>Samuel Cornet</p>
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
                  <div className={classes.rightUserData}>+509 7373-7377</div>
                </div>
                <div className={classes.details}>
                  <div className={classes.leftStaticText}>Email:</div>
                  <div className={classes.rightUserData}>samule@hall.me</div>
                </div>
                <div className={classes.details}>
                  <div className={classes.leftStaticText}>Address:</div>
                  <div className={classes.rightUserData}>23, Petion-Ville</div>
                </div>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.gitHub}>
          dsdsdd
        </Grid>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
