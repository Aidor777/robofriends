import React from "react";
import Card from "../card/Card";

const CardList = ({ robots }) => {
  const cardComponents = robots.map((robot) => (
    <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
  ));
  return <div data-testid="card-list">{cardComponents}</div>;
};

export default CardList;
