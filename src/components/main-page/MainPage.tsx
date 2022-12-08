import React, { useEffect } from "react";
import CardList from "../card-list/CardList";
import SearchBox from "../SearchBox";
import "./MainPage.css";
import Scroll from "../Scroll";
import ErrorCatcher from "../ErrorCatcher";
import Header from "../Header";
import { AppProps } from "../../model/app";
import { Robot } from "../../model/types";

const MainPage = (props: AppProps) => {
  const { searchField, onSearchChange, robots, isPending, onRequestRobots } =
    props;

  // eslint-disable-next-line
  useEffect(() => onRequestRobots(), []);

  const filteredRobots = robots.filter((robot: Robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  if (isPending) {
    return (
      <div className="tc">
        <h1 className="f1" data-testid="loading-header">
          Loading...
        </h1>
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

export default MainPage;
