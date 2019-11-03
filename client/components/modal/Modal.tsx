import React, { useState, useEffect } from "react";
import "./Modal.scss";
import { Suspect } from "../console/Suspect";
import { ApiClient } from "../../ApiClient";

export const Modal = props => {
  const [username, setUsername] = useState<string>("");
  const [player, setPlayer] = useState<string>("");
  const [dialog, setDialog] = useState<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (dialog && dialog.showModal) {
      dialog!.showModal();
    }
  }, [dialog]);

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePlayerChange = selectedOption => {
    setPlayer(selectedOption.target.label);
  };

  const handleButton = () => {
    const json = { "userName": username, "player": player };
    ApiClient.put("/player", json);
    dialog!.close();
  };

  return (
    <dialog
      ref={ref => setDialog(ref)}
      className={`modal center-dialog modal-body`}
    >
      <p>To play, please type in your name and choose a player</p>
      <div className="block">
        <label>Name:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="block">
        <label>Players:</label>
        <select onChange={handlePlayerChange}>
          {Object.keys(Suspect).map(key => (
            <option key={key} value={key}>
              {Suspect[key as any]}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleButton}>Play!</button>
    </dialog>
  );
};
