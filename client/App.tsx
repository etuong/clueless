import * as React from "react";
import "./App.scss";
import Notes from "./components/note/Notes";
import Board from "./components/board/Board";
import { Modal } from "./components/modal/Modal";
import { Console } from "./components/console/Console";
import { Cards } from "./components/Card/Cards";
import { ApiClient } from "./ApiClient";

interface AppProps {}

interface AppState {
  disable: boolean;
  player: string;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = { disable: true, player: "" };

    this.socket.on("start", async msg => {
      const response = await ApiClient.get("/player/" + this.state.player);
      console.log(msg);
      this.setPlayerDeck(response);
      this.enableGame();
    });
  }

  io = require("socket.io-client");
  socket = this.io.connect("http://localhost:3001", { reconnect: true });
  playerCards = new Array();

  enableGame = () => this.setState({ disable: false });

  setPlayerName = player => this.setState({ player: player });

  handleStartButton = () => {
    const { player } = this.state;
    ApiClient.post("/start");
    this.socket.emit("channel-start", player);
  };

  startGame = async () => {};

  setPlayerDeck = response => {
    response.cards.map((c: string) =>
      this.playerCards.push(require("./assets/" + c + ".jpg"))
    );
  };

  render() {
    const { disable, player } = this.state;
    return (
      <>
        <Modal handleCallback={this.setPlayerName} />
        {disable && (
          <button className="start-game" onClick={this.handleStartButton}>
            START!
          </button>
        )}
        <div className={`app ${disable && "disable"}`}>
          <Board />
          <div className="section">
            <Cards set={this.playerCards} />
            <div className="section-child">
              <Console player={player} socket={this.socket} />
              <Notes />
            </div>
          </div>
        </div>
      </>
    );
  }
}
