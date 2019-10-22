import * as React from "react";
import { FaTimes } from "react-icons/fa";

interface NoteProps {
  deleteNote: (id: number) => Promise<void>;
  note: string;
  id: number;
}

export default class NoteCell extends React.Component<NoteProps> {
  render() {
    const { deleteNote, note, id } = this.props;

    return (
      <div className="cell">
        <p className="note">{note}</p>
        <div className="icon-container">
          <FaTimes
            onClick={() => deleteNote(id)}
            color="red"
            size={22}
            className="times"
          />
        </div>
      </div>
    );
  }
}
