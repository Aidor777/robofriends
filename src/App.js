import React, { useState, useEffect } from "react";
import CardList from "./cards/CardList";
import SearchBox from "./misc/SearchBox";
import "./App.css";
import Scroll from "./misc/Scroll";
import ErrorCatcher from "./misc/ErrorCatcher";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  if (robots.length === 0) {
    return (
      <div className="tc">
        <h1 className="f1">Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorCatcher>
            <CardList robots={filteredRobots} />
          </ErrorCatcher>
        </Scroll>
      </div>
    );
  }
}

export default App;
