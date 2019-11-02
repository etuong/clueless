import React, { useState } from "react";
import Select from "react-select";
import "./Console.scss";
import { Weapon } from "./Weapon";
import { Suspect } from "./Suspect";
import { Room } from "./Room";

export const Console = props => {
  const [value, setValue] = useState<string>("");
  const [weapon, setWeapon] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [suspect, setSuspect] = useState<string>("");

  const io = require("socket.io-client");
  const socket = io.connect("http://localhost:3001", { reconnect: true });

  // Add a connect listener
  socket.on("connect", function(socket) {
    console.log("Connected!");
  });

  socket.on("message", function(msg) {
    console.log("message: " + msg);
    setValue(value + msg + "\r\n\r\n");
  });

  const handleSuspectChange = selectedOption => {
    setSuspect(selectedOption.label);
  };

  const handleRoomChange = selectedOption => {
    setRoom(selectedOption.label);
  };

  const handleWeaponChange = selectedOption => {
    setWeapon(selectedOption.label);
  };

  const accuse = () => {
    const message =
      suspect + " is the murderer in the " + room + " room using a " + weapon;
    socket.emit("channel", "Ethan", message);
  };

  const suggest = () => {
    const message =
      suspect + " is the murderer in the " + room + " room using a " + weapon;
    socket.emit("channel", "Ethan", message);
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
          placeholder="Select a room.."
          styles={customStyle}
          options={rooms.map(v => ({
            label: Room[v],
            value: v
          }))}
          onChange={handleRoomChange}
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
        <button onClick={suggest}>Suggest</button>
        <button onClick={accuse}>Accuse</button>
      </div>
      <div className="output">
        <label>Output</label>
        <textarea value={value} readOnly />
      </div>
    </div>
  );
};
