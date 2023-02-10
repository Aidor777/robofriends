import React from "react";
import { connect } from "react-redux";
import MainPage from "../components/main-page/MainPage";
import { AppDispatchProps, AppProps, AppStateProps } from "../model/app";
import { RobofriendsState } from "../model/state";
import { requestRobots, setSearchField } from "../store/actions";

const mapStateToProps = (state: RobofriendsState): AppStateProps => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (
  dispatch: (input: any) => any
): AppDispatchProps => {
  return {
    onSearchChange: (event: any) =>
      dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

const App = (props: AppProps) => {
  return <MainPage {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
