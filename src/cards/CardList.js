import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
  // throw new Error('NOOOOO!');
  const cardComponents = robots.map(robot => <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>);
  return (
    <div>
      {cardComponents}
    </div>
  );
};

export default CardList;