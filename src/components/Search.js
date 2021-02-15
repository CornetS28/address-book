import React, { useEffect } from "react";
import PropTypes from "prop-types";

// MUI Stuff
import withStyles from "@material-ui/core/styles/withStyles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

// Utils
import styles from "../utils/styles";

// Components
import SingleContact from "../components/SingleContact";
import Home from '../pages/home';

// Redux Stuff
import { connect, useSelector } from "react-redux";
import { getUsersAction } from "../redux/actions/users";

const Search = ({ classes, getUsers, test }) => {
  const [input, setInput] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const users = useSelector((state) => state.user.users);

  useEffect(() => {

    const filterResults = users?.filter((user) =>
    // console.log("welll",user.name.first)
      user.name.first.toLowerCase().includes(input.toLowerCase()
      )
    );
    setSearchResults(filterResults);
  }, [input]);

  useEffect(() => {
    setSearchResults(
      users?.filter((user) =>
        user.name.first.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [input, users]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className={classes.search}>
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
          placeholder={"Search a Session"}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {/* {searchResults} */}
      {/* {searchResults.map((user, idx) => (
            <SingleContact 
              // image={ProfileImage}
              fullname={user.name.first + " " + user.name.last}
              country={user.location.country}
              phone={user.phone}
              age={user.dob.age}
              key={idx}
              
            />
         ))} */}
    </>
  );
};

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getUsers: getUsersAction,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Search));
