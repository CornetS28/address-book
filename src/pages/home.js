import React, { useEffect } from "react";
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

// Components
import SingleContact from "../components/SingleContact";

// Utils
import styles from "../utils/styles";
import ProfileImage from "../utils/images/profile.png";

// Redux Stuff
import { connect, useSelector } from "react-redux";
import { getUsersAction } from "../redux/actions/users";

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

const Home = ({ classes, getUsers }) => {
  const [signers, setSigners] = React.useState(1);

  const onSignerChange = (event) => {
    setSigners(event.target.value);
  };

  const handleUsers = async () => {
    try {
      await getUsers();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleUsers();
  }, []);

  const users = useSelector((state) => state.user.users);

  console.log("uuuu@@:", users[0].name.first);
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
            My contacts
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

      {/* ALL CONTACTS */}

      <Grid container item xs={12} sm={10} className={classes.contactsWrapper}>
        <Grid
          container
          item
          xs={12}
          sm={9}
          className={classes.contactsSubWrapper}
        >
          {users.map((user, idx) => (
            <SingleContact
              image={ProfileImage}
              fullname={user.name.first + " " + user.name.last}
              country={user.location.country}
              phone={user.phone}
              age={user.dob.age}
              key={idx}
            />
          ))}

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
                Loading More
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={3} className={classes.gitHub}>
          <Grid item xs={12} sm={12} className={classes.gitHubRepo}>
            <p className={classes.copyWriteText}>
              Clone my repo via{" "}
              <a
                href="https://github.com/CornetS28"
                target="_blank"
                className={classes.copyWriteLink}
              >
                GitHub
              </a>
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getUsers: getUsersAction,
};

// export default withStyles(styles)(connect(null, mapDispatchToProps)(Home));
export default connect(null, mapDispatchToProps)(withStyles(styles)(Home));
