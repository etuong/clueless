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
  }

  playerCards = new Array();

  toggleDisable = () =>
    this.setState(prevState => ({ disable: !prevState.disable }));

  setPlayerName = player => this.setState({ player: player });

  start = async () => {
    ApiClient.post("/start");    
    const response = await ApiClient.get("/player/" + this.state.player);
    this.setPlayerDeck(response);
    this.toggleDisable();
  };

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
          <button className="start-game" onClick={this.start}>
            START!
          </button>
        )}
        <div className={`app ${disable && "disable"}`}>
          <Board />
          <div className="section">
            <Cards set={this.playerCards} />
            <div className="section-child">
              <Console player={player} />
              <Notes />
            </div>
          </div>
        </div>
      </>
    );
  }
}
