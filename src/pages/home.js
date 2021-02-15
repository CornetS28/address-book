import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

// Components
import SingleContact from "../components/SingleContact";
import LoadingMore from "../components/LoadingMore";
import FullUserDetails from "../components/FullUserDetails";

// Utils
import styles from "../utils/styles";

// Redux Stuff
import { connect, useSelector } from "react-redux";
import { getUsersAction } from "../redux/actions/users";

const Home = ({ classes, getUsers }) => {
  const users = useSelector((state) => state.user.users);
  const [defaultNatCategory, setNatCategory] = useState("ALL");
  const [selectedNat, setSelectedNat] = useState(users);
  const [hasMore, setHasMore] = useState(true);
  const [input, setInput] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState("");

  const choosesNat = (val) => {
    if (val === "ALL") return users;
    return users.filter((user) => user.nat === val);
  };

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
  const handleSearch = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setCurrent(users?.slice(count.prev, count.next));
    } else {
      setCurrent(
        users?.filter((user) =>
          user.name.first.toLowerCase().startsWith(input.toLowerCase())
        )
      );
    }
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

  const handleOpen = (uuid) => {
    const testUser = current.find((user) => user.login.uuid === uuid);
    setOpen(true);
    setUser(testUser);
  };

  const handleClose = () => {
    setOpen(false);
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
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <Typography variant="h6" className={classes.header}>
            My contacts
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={4}
          className={classes.searchWrapper}
        >
          <Grid xs={12} sm={12} className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search a name"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "helvetica neue": "search" }}
              value={input}
              placeholder={"Search a user"}
              onChange={handleSearch}
            />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          className={classes.filterWrapper}
        >
          <Grid container item sm={12} className={classes.filterContainer}>
            <Grid item xs={4} sm={4} className={classes.sortBy}>
              <p className={classes.sortByText}>Sort by</p>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Grid item xs={12} sm={12} className={classes.TextField}>
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
        <Grid item xs={12} sm={12} style={{ margin: "auto" }}>
          <Grid className={classes.smallEmpptySpace} />
          <Divider className={classes.divider2} />
        </Grid>
      </Grid>

      {/* ALL Users */}
      <Grid container item xs={12} sm={10} className={classes.contactsWrapper}>
        <Grid
          container
          item
          xs={12}
          sm={9}
          className={classes.contactsSubWrapper}
        >
          {searchResults &&
            searchResults.map((user, idx) => (
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

          <InfiniteScroll
            dataLength={current?.length}
            next={getMoreData}
            hasMore={hasMore}
            loader={current.length !== 0 && <LoadingMore />}
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
                    onClick={() => handleOpen(user.login.uuid)}
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

              {current.length === 0 && (
                <h2 style={{ color: "yellow" }}> No Data</h2>
              )}
            </Grid>
          </InfiniteScroll>
        </Grid>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open} className={classes.modalWrapper}>
            <Grid item xs={10} sm={8}>
              <h4 className={classes.modalHeader}>User Full Details</h4>
              <Grid item sx={12} sm={12}>
                <FullUserDetails user={user} />
              </Grid>
            </Grid>
          </Fade>
        </Modal>

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
