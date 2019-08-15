import React from "react";
import ReactDOM from "react-dom";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageMetaData from "./ImageGallery/ImageMetaData";
import MyBanner from "./MyBanner/MyBanner";
import MyButton from "./MyButton/MyButton";
import "./style.css";

let div = document.createElement("div");
div.setAttribute("id", "app");
document.body.appendChild(div);

ReactDOM.render(
  <div>
    <h5>zillow assignment</h5>
    <MyBanner caption="Banner caption" />
    <MyButton caption="Button caption" />

    <ImageGallery
      data={[
        new ImageMetaData(
          "http://lorempixel.com/1200/1200/nature/1",
          "caption1"
        ),
        new ImageMetaData(
          "http://lorempixel.com/1200/1200/nature/2",
          "caption2"
        ),
        new ImageMetaData(
          "http://lorempixel.com/1200/1200/nature/3",
          "caption3"
        )
      ]}
    />
  </div>,
  document.getElementById("app")
);
