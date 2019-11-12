import * as React from "react";

export const Room = props => {
  return (
    <td
      style={{ backgroundImage: `url(${props.room})` }}
      className={`room ${props.selected && "path"}`}
    >
      <div className={props.character ? "player in-room" : ""}>
        {props.character}
      </div>
    </td>
  );
};

export const Empty = () => {
  return <td></td>;
};
