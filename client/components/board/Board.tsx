import * as React from "react";
import { Suspect } from "../console/Suspect";
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
  character: Suspect;
}

export default class Board extends React.Component<BoardProps> {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td
              style={{ backgroundImage: `url(${bathroom})` }}
              className="room"
            >
              <div className="player">Prof Plum</div>
            </td>
            <td>
              <div className="horizontal-hall path"></div>
            </td>
            <td
              style={{ backgroundImage: `url(${billiard})` }}
              className="room"
            ></td>
            <td>
              <div className="horizontal-hall"></div>
            </td>
            <td
              style={{ backgroundImage: `url(${conservatory})` }}
              className="room"
            ></td>
          </tr>
          <tr>
            <td>
              <div className="vertical-hall path"></div>
            </td>
            <td></td>
            <td>
              <div className="vertical-hall"></div>
            </td>
            <td></td>
            <td>
              <div className="vertical-hall"></div>
            </td>
          </tr>
          <tr>
            <td
              style={{ backgroundImage: `url(${dining})` }}
              className="room"
            ></td>
            <td>
              <div className="horizontal-hall"></div>
            </td>
            <td
              style={{ backgroundImage: `url(${hall})` }}
              className="room"
            ></td>
            <td>
              <div className="horizontal-hall"></div>
            </td>
            <td
              style={{ backgroundImage: `url(${kitchen})` }}
              className="room"
            ></td>
          </tr>
          <tr>
            <td>
              <div className="vertical-hall"></div>
            </td>
            <td></td>
            <td>
              <div className="vertical-hall"></div>
            </td>
            <td></td>
            <td>
              <div className="vertical-hall"></div>
            </td>
          </tr>
          <tr>
            <td
              style={{ backgroundImage: `url(${library})` }}
              className="room"
            ></td>
            <td>
              <div className="horizontal-hall"></div>
            </td>
            <td
              style={{ backgroundImage: `url(${lounge})` }}
              className="room"
            ></td>
            <td>
              <div className="horizontal-hall"></div>
            </td>
            <td
              style={{ backgroundImage: `url(${study})` }}
              className="room"
            ></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
