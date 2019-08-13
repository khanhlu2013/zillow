import React from "react";
import ReactDOM from "react-dom";
import MyBanner from "./MyBanner/MyBanner";
import MyButton from "./MyButton/MyButton";

let div = document.createElement("div");
div.setAttribute("id", "app");
document.body.appendChild(div);

ReactDOM.render(
  <div>
    <h5>zillow assignment</h5>
    <MyBanner caption="Banner caption" />
    <MyButton caption="Button caption" />
  </div>,
  document.getElementById("app")
);
