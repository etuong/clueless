import * as React from "react";
import "./App.scss";
import Notes from "./components/note/Notes";
import Board from "./components/board/Board";
import Console from "./components/console/Console";

interface AppProps {}

interface AppState {}

export class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Board />
        <Console />
        <Notes />       
      </div>
    );
  }
}

export default App;
