import React, { useEffect, useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

// Components
import SingleContact from "../components/SingleContact";
import LoadingMore from "../components/LoadingMore";

// Utils
import styles from "../utils/styles";

// Redux Stuff
import { connect, useSelector } from "react-redux";
import { getUsersAction } from "../redux/actions/users";

const Home = ({ classes, getUsers, allUsers }) => {
  const [defaultNatCategory, setNatCategory] = useState("ALL");

  const users = useSelector((state) => state.user.users);

  const choosesNat = (val) => {
    if (val === "ALL") return users;
    return users.filter((user) => user.nat === val);
  };

  const [selectedNat, setSelectedNat] = useState(users);
  const nationalityOptions = [
    {
      value: "ALL",
      label: "ALL",
    },
    {
      value: "ES",
      label: "ES",
    },
    {
      value: "FR",
      label: "FR",
    },
    {
      value: "GB",
      label: "GB",
    },
    {
      value: "CH",
      label: "CH",
    },
  ];

  const [count, setCount] = useState({
    prev: 0,
    next: 20,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(users?.slice(count.prev, count.next));
  const getMoreData = () => {
    if (current.length === selectedNat?.length || current.length === 0) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(
        current.concat(selectedNat?.slice(count.prev + 20, count.next + 20))
      );
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + 20,
      next: prevState.next + 20,
    }));
  };

  const onChange = (event) => {
    const newUser = choosesNat(event.target.value);
    setSelectedNat(newUser);
    setNatCategory(event.target.value);
    setHasMore(true);
    setCurrent(newUser.slice(count.prev, count.next));
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

  console.log("Nat Usr:", selectedNat?.slice(0, 20));
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
                    value={defaultNatCategory}
                    onChange={onChange}
                  >
                    {nationalityOptions.map((option) => (
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
          <InfiniteScroll
            dataLength={current?.length}
            next={getMoreData}
            hasMore={hasMore}
            loader={<LoadingMore />}
          >
            <Grid container justify="space-evenly">
              {current &&
                selectedNat &&
                current.map((user, idx) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={idx}
                    className={classes.contactContainer}
                  >
                    <SingleContact
                      image={user.picture.medium}
                      fullname={user.name.first + " " + user.name.last}
                      country={user.location.country}
                      phone={user.phone}
                      age={user.dob.age}
                      key={idx}
                    />
                  </Grid>
                ))}
            </Grid>
          </InfiniteScroll>
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

export default connect(null, mapDispatchToProps)(withStyles(styles)(Home));
