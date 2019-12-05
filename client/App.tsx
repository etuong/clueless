import * as React from "react";
import "./App.scss";
import Notes from "./components/note/Notes";
import { Board } from "./components/board/Board";
import { Modal } from "./components/modal/Modal";
import { Console } from "./components/console/Console";
import { Cards } from "./components/Card/Cards";
import { ApiClient } from "./ApiClient";
import { Suspect } from "./components/console/Suspect";

interface AppProps {}

interface AppState {
  disable: boolean;
  player: string;
  isPlaying: boolean;
  currentPlayerHeader: string;
  currentPlayer: string;
  currentCharacter: string;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      disable: true,
      player: "",
      isPlaying: false,
      currentPlayerHeader: "",
      currentPlayer: "",
      currentCharacter: ""
    };
    this.socket = this.io.connect("http://localhost:3001", { reconnect: true });
  }

  componentDidMount() {
    //this.setIsPlaying();

    this.socket.on("start", async msg => {
      const response = await ApiClient.get("/player/" + this.state.player);
      console.log(msg);
      this.setPlayerDeck(response);
      this.enableGame();
    });

    this.socket.on("current-player", async msg => {
      this.setState({
        currentPlayerHeader: msg
      });
    });
  }

  private socket;
  private io = require("socket.io-client");

  playerCards = new Array();

  enableGame = () => this.setState({ disable: false });

  setPlayerName = player => {
    this.setState({ player: player });
    this.socket.emit("channel-new-player", player);
  };

  setIsPlaying = async () => {
    const flag = await ApiClient.get("/start");
    this.setState({ isPlaying: flag.isPlaying });
  };

  handleStartButton = async () => {
    const { player } = this.state;
    const response = await ApiClient.post("/start");
    const current_player = response["current_player"];
    const current_character = Suspect[response[current_player].character_name];
    this.socket.emit(
      "channel-current-player",
      current_player,
      current_character
    );
    this.socket.emit("channel-start", player);
    this.setState({
      currentPlayer: current_player,
      currentCharacter: current_character
    });
  };

  setPlayerDeck = response => {
    response.cards.map((c: string) =>
      this.playerCards.push(require("./assets/" + c + ".jpg"))
    );
  };

  render() {
    const {
      disable,
      player,
      isPlaying,
      currentPlayerHeader,
      currentPlayer,
      currentCharacter
    } = this.state;
    if (!isPlaying) {
      return (
        <>
          <Modal handleCallback={this.setPlayerName} />
          {disable && (
            <button className="start-game" onClick={this.handleStartButton}>
              START!
            </button>
          )}
          {!disable && (
            <button className="current-player">
              {currentPlayerHeader} Turn
            </button>
          )}
          <div className={`app ${disable && "disable"}`}>
            <Board
              socket={this.socket}
              currentPlayer={currentPlayer}
              currentCharacter={currentCharacter}
            />
            <div className="section">
              <Cards set={this.playerCards} player={player} />
              <div className="section-child">
                <Console player={player} socket={this.socket} />
                <Notes />
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <p className="already-playing">
          THE GAME IS ALREADY PLAYING! PLEASE WAIT FOR THE NEXT GAME.
        </p>
      );
    }
  }
}
