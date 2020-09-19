import React from "react";
import CardItem from "./card-item.component";
import "./card.style.css";

const Card = () => {
  return (
    <div className="cards">
      <h1>Check out the courses we offer!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/java8.png"
              text="Learn everything about Java and its most widely used framework"
              label="Java8"
              path="/courses"
            />
            <CardItem
              src="/images/devops.png"
              text="Learn everything about DevOps"
              label="DevOps"
              path="/courses"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
