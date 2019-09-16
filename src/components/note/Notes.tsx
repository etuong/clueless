import * as React from 'react'
import { css } from 'glamor'
import Form from './Form'
import NoteCell from './NoteCell'
import NoteType from './NoteType'

interface NotesProps {

}

interface NotesInterface {
  notes: NoteType[]
}

class Notes extends React.Component<NotesProps, NotesInterface> {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };

    this.createNote = this.createNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  createNote = async (noteType: NoteType) => {
    const notes = [noteType, ...this.state.notes]
    this.setState({ notes })
  }

  deleteNote = async (id: number) => {
    const notes = this.state.notes.filter(n => n.id !== id)
    this.setState({ notes })
  }

  render() {
    return (
      <div {...css(styles.container)}>
        <p {...css(styles.title)}>Notes</p>
        <Form createNote={this.createNote} />
        {
          this.state.notes.map((t, i) => (
            <NoteCell
              key={i}
              note={t.note}
              id={t.id}
              deleteNote={this.deleteNote}
            />
          ))
        }
      </div>
    )
  }
}

const styles = {
  container: {
    width: '360px',
    margin: '0 auto',
  },
  title: {
    fontSize: 30,
    margin: '10px 0px'
  },
} 
export default Notes