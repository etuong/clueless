import * as React from "react";
import "./App.scss";
import Notes from "./components/note/Notes";
import Board from "./components/board/Board";
import { Modal } from "./components/modal/Modal";
import { Console } from "./components/console/Console";
import { Cards } from "./components/Card/Cards";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Modal />
        <div className="app">
          <Board />
          <div className="section">
            <Cards />
            <div className="section-child">
              <Console />
              <Notes />
            </div>
          </div>
        </div>
      </>
    );
  }
}
