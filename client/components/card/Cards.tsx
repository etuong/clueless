import React from "react";
import "./Cards.scss";
import { useState, useEffect } from "react";

export const Cards = props => {
  const [disapprove, setDisapprove] = useState<boolean>(false);

  useEffect(() => {
    props.socket.on("disapprove", function(msg, a, b, c) {
      setDisapprove(a.player_name === props.player ? a.allow_disapproval : false)
    });
  }, [props.player ]);

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
      <p className="title">{props.player && `${props.player}'s`} Cards</p>

      {shuffledSet.map((card, idx) => {
        return (
          <img
            key={idx}
            src={card}
            className={`${disapprove && "disapprove"}`}
          />
        );
      })}
    </div>
  );
};
