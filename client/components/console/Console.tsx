import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./Console.scss";
import { Weapon } from "./Weapon";
import { Suspect } from "./Suspect";
import { Room } from "./Room";

export const Console = props => {
  const [player, setPlayer] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [weapon, setWeapon] = useState<string>("");
  const [room] = useState<string>("Ballroom");
  const [suspect, setSuspect] = useState<string>("");

  useEffect(() => {
    setPlayer(props.player);
  });

  // Add a connect listener
  props.socket.on("connect", function(socket) {
    console.log("Connected!");
  });

  props.socket.on("message", function(msg) {
    console.log("message: " + msg);
    setValue(value + msg + "\r\n\r\n");
  });

  const handleSuspectChange = selectedOption => {
    setSuspect(selectedOption.label);
  };

  const handleWeaponChange = selectedOption => {
    setWeapon(selectedOption.label);
  };

  const accuse = () => {
    const message =
      suspect + " is the murderer in the " + room + " room using a " + weapon;
    props.socket.emit("channel-message", player, message);
  };

  const suggest = () => {
    const message =
      suspect + " is the murderer in the " + room + " room using a " + weapon;
    props.socket.emit("channel-message", player, message);
  };

  const weapons = Object.keys(Weapon).filter(item => {
    return isNaN(Number(item));
  });

  const suspects = Object.keys(Suspect).filter(item => {
    return isNaN(Number(item));
  });

  const rooms = Object.keys(Room).filter(item => {
    return isNaN(Number(item));
  });

  const customStyle = {
    container: styles => ({ ...styles, width: "40%" })
  };

  return (
    <div className="console-container">
      <p className="title">Console</p>
      <div className="block">
        <label>Suspects:</label>
        <Select
          placeholder="Select a suspect.."
          styles={customStyle}
          options={suspects.map(v => ({
            label: Suspect[v],
            value: v
          }))}
          onChange={handleSuspectChange}
        />
      </div>
      <div className="block">
        <label>Rooms:</label>
        <Select
          placeholder={room}
          isDisabled={true}
          styles={customStyle}
          options={rooms.map(v => ({
            label: Room[v]
          }))}
        />
      </div>
      <div className="block">
        <label>Weapons:</label>
        <Select
          placeholder="Select a weapon.."
          styles={customStyle}
          options={weapons.map(v => ({
            label: Weapon[v],
            value: v
          }))}
          onChange={handleWeaponChange}
        />
      </div>
      <div className="announce">
        <button className="suggest" onClick={suggest}>
          Suggest
        </button>
        <button className="accuse" onClick={accuse}>
          Accuse
        </button>
      </div>
      <div className="output">
        <label>Output</label>
        <textarea value={value} readOnly />
      </div>
    </div>
  );
};
