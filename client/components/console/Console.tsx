import * as React from "react";
import { css } from "glamor";
import { ApiClient } from "../../ApiClient";
import Select from "react-select";

interface ConsoleProps {}

interface ConsoleInterface {
  value: string;
}

class Console extends React.Component<ConsoleProps, ConsoleInterface> {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const test = await ApiClient.get("/test/" + this.state.value);
    alert(test.response);
  }

  handleSuspectChange = selectedOption => {};

  handleRoomChange = selectedOption => {};

  handleWeaponChange = selectedOption => {};

  render() {
    const weapons = ["Candlestick", "Knife", "Pipe", "Pistol", "Rope", "Wench"];
    const suspects = [
      "Miss Scarlett",
      "Rev. Green",
      "Colonel Mustard",
      "Professor Plum",
      "Mrs. Peacock",
      "Mr. White"
    ];
    const rooms = [
      "Ballroom",
      "Billiard",
      "Conservatory",
      "Dining",
      "Hall",
      "Kitchen",
      "Library",
      "Lounge",
      "Study"
    ];

    return (
      <div {...css(styles.container)}>
        <p {...css(styles.title)}>Console</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        Suspects:
        <Select
          options={suspects.map(v => ({
            label: v,
            value: v
          }))}
          onChange={this.handleSuspectChange}
        />
        Rooms:
        <Select
          options={rooms.map(v => ({
            label: v,
            value: v
          }))}
          onChange={this.handleRoomChange}
        />
        Weapons:
        <Select
          options={weapons.map(v => ({
            label: v,
            value: v
          }))}
          onChange={this.handleWeaponChange}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    width: "360px",
    margin: "0 auto"
  },
  title: {
    fontSize: 30,
    margin: "10px 0px"
  }
};

export default Console;
