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

  const dictionary = {
    study: setStudy,
    "study-hall": setStudyHall,
    hall: setHall,
    "hall-lounge": setHallLounge,
    lounge: setLounge,
    "study-library": setStudyLibrary,
    "hall-billiard": setHallBilliard,
    "lounge-dining": setLoungeDining,
    library: setLibrary,
    "library-billiard": setLibraryBilliard,
    billiard: setBilliard,
    "billiard-dining": setBilliardDining,
    dining: setDining,
    "library-conservatory": setLibraryConservatory,
    "billiard-ballroom": setBilliardBallroom,
    "dining-kitchen": setDiningKitchen,
    conservatory: setConservatory,
    "conservatory-ballroom": setConservatoryBallroom,
    ballroom: setBallroom,
    "ballroom-kitchen": setBallroomKitchen,
    kitchen: setKitchen
  };

  useEffect(() => {
    props.socket.on("update-board", async function() {
      const response = await ApiClient.get("/players");
      console.log(response);
      for (var key of Object.keys(response)) {
        const roomHall = response[key].room_hall;
        const f = dictionary[roomHall];       
        const character = response[key].character_name;
        if (f) {
          f.call(character);
        }
        // SHIT DOESN"T WORK ABOVE
        if (roomHall === "ballroom-kitchen") {
          setBallroomKitchen(character);
        } else if (roomHall === "conservatory-ballroom") {
          setConservatoryBallroom(character);
        }
      }
    });
  }, []);

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
