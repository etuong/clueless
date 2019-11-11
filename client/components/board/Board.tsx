import * as React from "react";
import { Suspect } from "../console/Suspect";
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

interface BoardProps {
  character?: Suspect;
}

export default class Board extends React.Component<BoardProps> {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <Room room={study} character={"Prof Plum"} selected={true} />
            <Hall horizontal={true} selected={true} />
            <Room room={hall} />
            <Hall horizontal={true} />
            <Room room={lounge} />
          </tr>
          <tr>
            <Hall horizontal={false} selected={true} />
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
  }
}
