import * as React from 'react'
import { css } from 'glamor'
import { MdAdd } from 'react-icons/md'
import NoteType from './NoteType'

interface FormProps {
  createNote: (note: NoteType) => Promise<void>
}

interface FormState {
  note: string,
  id: number
}

export class Form extends React.Component<FormProps, FormState> {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      id: 0
    };
  }

  onChange = e => {
    this.setState({ note: e.target.value })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.note !== '') {
      const { note, id } = this.state;
      this.props.createNote({ note, id })
      this.setState({ note: '', id: id + 1 })
    }
  }

  render() {
    return (
      <div {...css(styles.container)}>
        <div {...css(styles.form)}>
          <MdAdd size={28} />
          <input
            {...css(styles.input)}
            placeholder='Write new note here..'
            onKeyPress={this.handleKeyPress}
            onChange={e => this.onChange(e)}
            value={this.state.note}
          />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    width: 360,
    margin: '0 auto',
    borderBottom: '1px solid #ededed',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 20,
    width: '360px',
    border: 'none',
    outline: 'none',
    marginLeft: 10,
    fontSize: 20,
    padding: 8,
  }
}

export default Form