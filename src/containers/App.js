import React, { useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorCatcher from "../components/ErrorCatcher";
import { connect } from "react-redux";
import { requestRobots, setSearchField } from "../store/actions";
import Header from "../components/Header";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

const App = (props) => {
  const { searchField, onSearchChange, robots, isPending, onRequestRobots } = props;

  // eslint-disable-next-line
  useEffect(() => onRequestRobots(), []);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  if (isPending) {
    return (
      <div className="tc">
        <h1 className="f1">Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorCatcher>
            <CardList robots={filteredRobots} />
          </ErrorCatcher>
        </Scroll>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
