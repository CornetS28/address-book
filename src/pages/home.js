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

// Components
import SingleContact from "../components/SingleContact";

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
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <SingleContact
            image={ProfileImage}
            fullname="John Doe"
            email="john@doe.com"
            phone="+509 3233-3232"
            address="43, Petiov-Ville"
          />
          <Grid container item xs={12} sm={12}>
            <Grid item xs={12} sm={7} md={6} lg={5} className={classes.loadingMoreContact}>
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
};

export default withStyles(styles)(Home);
