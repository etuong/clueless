import * as React from 'react';
import './App.css';
import Notes from './components/note/Notes';
import Board from './components/board/Board';

interface AppProps {

}

interface AppState {

}

export class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Board />
        <Notes />
      </div>
    );
  }
}

export default App;
