import React from "react";
import { CardListProps } from "../../model/card-list";
import Card from "../card/Card";

const CardList = ({ robots }: CardListProps) => {
  const cardComponents = robots.map((robot) => (
    <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
  ));
  return <div data-testid="card-list">{cardComponents}</div>;
};

export default CardList;
