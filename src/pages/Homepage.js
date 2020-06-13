import React from "react";
import Products from "./Products";

export default function Homepage() {
  return (
    <div>
      <h1>The Hub</h1>
      <p>Hi i am component</p>
      <div>
        {"Categories: "}
        <select>
          <option>{"FPS"}</option>
          <option>{"RTS"}</option>
          <option>{"SPORTS"}</option>
          <option>{"RPG"}</option>
          <option>{"MMORPG"}</option>
        </select>
      </div>
      <Products />
    </div>
  );
}
