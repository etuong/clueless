import React from "react";
import "./Cards.scss";

export const Cards = props => {
  const shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  const shuffledSet = shuffleArray(props.set);

  return (
    <div className="card-container">
      <p className="title">Cards</p>

      {shuffledSet.map((card, idx) => {
        return <img key={idx} src={card} />;
      })}
    </div>
  );
};
