import * as React from "react";

export const Hall = props => {
  return (
    <td>
      <div
        className={`${props.horizontal ? "horizontal-hall" : "vertical-hall"}
        ${props.selected ? "path" : ""}`}
      ></div>
    </td>
  );
};
