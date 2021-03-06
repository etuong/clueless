import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow, mount } from "enzyme";
import Console from "../components/console/Console.tsx";

describe("Console", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

