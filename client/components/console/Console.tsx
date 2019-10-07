import * as React from 'react'
import { css } from 'glamor'
import { ApiClient } from '../../ApiClient'

interface ConsoleProps {

}

interface ConsoleInterface {
  value: string
}

class Console extends React.Component<ConsoleProps, ConsoleInterface> {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const test = await ApiClient.get('/test/' + this.state.value);
    alert(test.response);    
  }

  render() {
    return (
      <div {...css(styles.container)}>
        <p {...css(styles.title)}>Console</p>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
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

export default Console