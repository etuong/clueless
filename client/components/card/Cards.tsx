import React from "react";
import "./Cards.scss";
import ballroom from "../../assets/ballroom.jpg";
import conservatory from "../../assets/conservatory.jpg";
import dining from "../../assets/dining.jpg";
/*import hall from "../../assets/hall.jpg";
import kitchen from "../../assets/kitchen.jpg";
import library from "../../assets/library.jpg";
import lounge from "../../assets/lounge.jpg";
import study from "../../assets/study.jpg";*/
import candlestick from "../../assets/candlestick.jpg";
import green from "../../assets/green.jpg";
import pipe from "../../assets/pipe.jpg";
import plum from "../../assets/plum.jpg";
import rope from "../../assets/rope.jpg";
import white from "../../assets/white.jpg";
import wrench from "../../assets/wrench.jpg";

export const Cards = props => {
  const set = [
    ballroom,
    green,
    candlestick,
    white,
    dining,
    wrench,
    rope,
    plum,
    pipe,
    conservatory
  ];

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
  const shuffledSet = shuffleArray(set);

  return (
    <div className="card-container">
      <p className="title">Cards</p>

      {shuffledSet.map((card, idx) => {
        return <img key={idx} src={card} />;
      })}
    </div>
  );
};
