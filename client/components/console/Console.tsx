import * as React from "react";
import Select from "react-select";
import "./Console.scss";
import { Weapon } from "./Weapon";
import { Suspect } from "./Suspect";
import { Room } from "./Room";
import { RabbitMqInterface } from "rabbitode";

interface ConsoleProps {}

interface ConsoleInterface {
  value: string;
}

export default class Console extends React.Component<
  ConsoleProps,
  ConsoleInterface
> {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleSuspectChange = this.handleSuspectChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleWeaponChange = this.handleWeaponChange.bind(this);
  }

  myConnection = new RabbitMqInterface();
  
  componentWillMount() {

    this.myConnection.setRabbitUri("amqp://localhost");

    const handleConsume = channel => msg => {
      console.log(this.myConnection.decodeToString(msg));
      channel.ack(msg);
    };

    this.myConnection.startFanoutConsumer({
      exchangeName: "logs",
      exchangeType: "fanout",
      queueName: "",
      consumerCallback: handleConsume
    });
  }

  handleSuspectChange = selectedOption => {
    this.myConnection.sendFanout({
      exchangeName: "fanout_test_exchange",
      routingKey: ``,
      content: `ethan this is a test`
    });
  };

  handleRoomChange = selectedOption => {};

  handleWeaponChange = selectedOption => {};

  weapons = Object.keys(Weapon).filter(item => {
    return isNaN(Number(item));
  });

  suspects = Object.keys(Suspect).filter(item => {
    return isNaN(Number(item));
  });

  rooms = Object.keys(Room).filter(item => {
    return isNaN(Number(item));
  });

  render() {
    const customStyle = {
      container: styles => ({ ...styles, width: "40%" })
    };

    return (
      <div className="console-container">
        <p className="title">Console</p>
        <div className="block">
          <label>Suspects:</label>
          <Select
            placeholder="Select a suspect.."
            styles={customStyle}
            options={this.suspects.map(v => ({
              label: Suspect[v],
              value: v
            }))}
            onChange={this.handleSuspectChange}
          />
        </div>
        <div className="block">
          <label>Rooms:</label>
          <Select
            placeholder="Select a room.."
            styles={customStyle}
            options={this.rooms.map(v => ({
              label: Room[v],
              value: v
            }))}
            onChange={this.handleRoomChange}
          />
        </div>
        <div className="block">
          <label>Weapons:</label>
          <Select
            placeholder="Select a weapon.."
            styles={customStyle}
            options={this.weapons.map(v => ({
              label: Weapon[v],
              value: v
            }))}
            onChange={this.handleWeaponChange}
          />
        </div>
      </div>
    );
  }
}
