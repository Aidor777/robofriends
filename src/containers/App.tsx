import React from "react";
import { connect } from "react-redux";
import MainPage from "../components/main-page/MainPage";
import { requestRobots, setSearchField } from "../store/actions";

const mapStateToProps = (state: any) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: any) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

const App = (props: any) => {
  return <MainPage {...props} />
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
