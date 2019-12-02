import * as React from "react";
import { Room, Empty } from "./Room";
import { Hall } from "./Hall";
import BATHROOM from "../../assets/ballroom.png";
import BILLIARD from "../../assets/billiard.png";
import CONSERVATORY from "../../assets/conservatory.png";
import DINING from "../../assets/dining.png";
import HALL from "../../assets/hall.png";
import KITCHEN from "../../assets/kitchen.png";
import LIBRARY from "../../assets/library.png";
import LOUNGE from "../../assets/lounge.png";
import STUDY from "../../assets/study.png";
import "./Board.scss";
import { useState, useEffect } from "react";
import { ApiClient } from "../../ApiClient";

export const Board = props => {
  "use strict";
  const [study, setStudy] = useState<string>("");
  const [studyHall, setStudyHall] = useState<string>("");
  const [hall, setHall] = useState<string>("");
  const [hallLounge, setHallLounge] = useState<string>("");
  const [lounge, setLounge] = useState<string>("");
  const [studyLibrary, setStudyLibrary] = useState<string>("");
  const [hallBilliard, setHallBilliard] = useState<string>("");
  const [loungeDining, setLoungeDining] = useState<string>("");
  const [library, setLibrary] = useState<string>("");
  const [libraryBilliard, setLibraryBilliard] = useState<string>("");
  const [billiard, setBilliard] = useState<string>("");
  const [billiardDining, setBilliardDining] = useState<string>("");
  const [dining, setDining] = useState<string>("");
  const [libraryConservatory, setLibraryConservatory] = useState<string>("");
  const [billiardBallroom, setBilliardBallroom] = useState<string>("");
  const [diningKitchen, setDiningKitchen] = useState<string>("");
  const [conservatory, setConservatory] = useState<string>("");
  const [conservatoryBallroom, setConservatoryBallroom] = useState<string>("");
  const [ballroom, setBallroom] = useState<string>("");
  const [ballroomKitchen, setBallroomKitchen] = useState<string>("");
  const [kitchen, setKitchen] = useState<string>("");

  useEffect(() => {
    props.socket.on("update-board", async function() {
      resetBoard();
      const response = await ApiClient.get("/players");
      console.log(response);
      for (var key of Object.keys(response)) {
        const roomHall = response[key].room_hall;
        const character = prettifyName(response[key].character_name);

        switch (roomHall) {
          case "study":
            setStudy(character);
            break;
          case "study-hall":
            setStudyHall(character);
            break;
          case "hall":
            setHall(character);
            break;
          case "hall-lounge":
            setHallLounge(character);
            break;
          case "lounge":
            setLounge(character);
            break;
          case "study-library":
            setStudyLibrary(character);
            break;
          case "hall-billiard":
            setHallBilliard(character);
            break;
          case "lounge-dining":
            setLoungeDining(character);
            break;
          case "library":
            setLibrary(character);
            break;
          case "library-billiard":
            setLibraryBilliard(character);
            break;
          case "billiard":
            setBilliard(character);
            break;
          case "billiard-dining":
            setBilliardDining(character);
            break;
          case "dining":
            setDining(character);
            break;
          case "library-conservatory":
            setLibraryConservatory(character);
            break;
          case "billiard-ballroom":
            setBilliardBallroom(character);
            break;
          case "dining-kitchen":
            setDiningKitchen(character);
            break;
          case "conservatory":
            setConservatory(character);
            break;
          case "conservatory-ballroom":
            setConservatoryBallroom(character);
            break;
          case "ballroom":
            setBallroom(character);
            break;
          case "ballroom-kitchen":
            setBallroomKitchen(character);
            break;
          case "kitchen":
            setKitchen(character);
            break;
        }
      }
    });
  }, []);

  const resetBoard = () => {
    const EMPTY = "";
    setStudy(EMPTY);
    setStudyHall(EMPTY);
    setHall(EMPTY);
    setHallLounge(EMPTY);
    setLounge(EMPTY);
    setStudyLibrary(EMPTY);
    setHallBilliard(EMPTY);
    setLoungeDining(EMPTY);
    setLibrary(EMPTY);
    setLibraryBilliard(EMPTY);
    setBilliard(EMPTY);
    setBilliardDining(EMPTY);
    setDining(EMPTY);
    setLibraryConservatory(EMPTY);
    setBilliardBallroom(EMPTY);
    setDiningKitchen(EMPTY);
    setConservatory(EMPTY);
    setConservatoryBallroom(EMPTY);
    setBallroom(EMPTY);
    setBallroomKitchen(EMPTY);
    setKitchen(EMPTY);
  }

  const prettifyName = name => {
    let prettifiedName = "";
    switch (name) {
      case "miss_scarlet":
        prettifiedName = "Miss Scarlet";
        break;
      case "professor_plum":
        prettifiedName = "Prof Plum";
        break;
      case "colonel_mustard":
        prettifiedName = "Col Mustard";
        break;
      case "mrs_peacock":
        prettifiedName = "Mrs. Peacock";
        break;
      case "mr_green":
        prettifiedName = "Mr. Green";
        break;
      case "mrs_white":
        prettifiedName = "Mrs. White";
        break;
      default:
        break;
    }
    return prettifiedName;
  };

  return (
    <table>
      <tbody>
        <tr>
          <Room room={STUDY} character={study} />
          <Hall horizontal={true} character={studyHall} />
          <Room room={HALL} character={hall} />
          <Hall horizontal={true} character={hallLounge} />
          <Room room={LOUNGE} character={lounge} />
        </tr>
        <tr>
          <Hall horizontal={false} character={studyLibrary} />
          <Empty />
          <Hall horizontal={false} character={hallBilliard} />
          <Empty />
          <Hall horizontal={false} character={loungeDining} />
        </tr>
        <tr>
          <Room room={LIBRARY} character={library} />
          <Hall horizontal={true} character={libraryBilliard} />
          <Room room={BILLIARD} character={billiard} />
          <Hall horizontal={true} character={billiardDining} />
          <Room room={DINING} character={dining} />
        </tr>
        <tr>
          <Hall horizontal={false} character={libraryConservatory} />
          <Empty />
          <Hall horizontal={false} character={billiardBallroom} />
          <Empty />
          <Hall horizontal={false} character={diningKitchen} />
        </tr>
        <tr>
          <Room room={CONSERVATORY} character={conservatory} />
          <Hall horizontal={true} character={conservatoryBallroom} />
          <Room room={BATHROOM} character={ballroom} />
          <Hall horizontal={true} character={ballroomKitchen} />
          <Room room={KITCHEN} character={kitchen} />
        </tr>
      </tbody>
    </table>
  );
};
