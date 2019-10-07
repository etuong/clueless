import * as React from 'react'
import { css } from 'glamor'
import { FaTimes } from 'react-icons/fa'

interface NoteProps {
  deleteNote: (id: number) => Promise<void>
  note: string
  id: number
}

class NoteCell extends React.Component<NoteProps> {
  render() {
    const { deleteNote, note, id } = this.props;

    return (
      <div {...css(styles.container)}>
        <p {...css(styles.note)}>{note}</p>
        <div {...css(styles.iconContainer)}>
          <FaTimes
            onClick={() => deleteNote(id)}
            color='red'
            size={22}
            {...css(styles.times)}
          />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    borderBottom: '1px solid rgba(0, 0, 0, .15)',
    display: 'flex',
    alignItems: 'center',
    height: '40px'
  },
  note: {
    textAlign: 'left',
    fontSize: 18
  },
  iconContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  times: {
    cursor: 'pointer',
    opacity: 0.7
  }
}

export default NoteCell