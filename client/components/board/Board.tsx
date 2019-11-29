import * as React from "react";
import { Room, Empty } from "./Room";
import { Hall } from "./Hall";
import bathroom from "../../assets/ballroom.png";
import billiard from "../../assets/billiard.png";
import conservatory from "../../assets/conservatory.png";
import dining from "../../assets/dining.png";
import hall from "../../assets/hall.png";
import kitchen from "../../assets/kitchen.png";
import library from "../../assets/library.png";
import lounge from "../../assets/lounge.png";
import study from "../../assets/study.png";
import "./Board.scss";

export const Board = props => {
  return (
    <table>
      <tbody>
        <tr>
          <Room room={study} />
          <Hall horizontal={true} />
          <Room room={hall} />
          <Hall horizontal={true} />
          <Room room={lounge} />
        </tr>
        <tr>
          <Hall horizontal={false} />
          <Empty />
          <Hall horizontal={false} />
          <Empty />
          <Hall horizontal={false} />
        </tr>
        <tr>
          <Room room={library} />
          <Hall horizontal={true} />
          <Room room={billiard} />
          <Hall horizontal={true} />
          <Room room={dining} />
        </tr>
        <tr>
          <Hall horizontal={false} />
          <Empty />
          <Hall horizontal={false} />
          <Empty />
          <Hall horizontal={false} />
        </tr>
        <tr>
          <Room room={conservatory} />
          <Hall horizontal={true} />
          <Room room={bathroom} />
          <Hall horizontal={true} />
          <Room room={kitchen} />
        </tr>
      </tbody>
    </table>
  );
};
