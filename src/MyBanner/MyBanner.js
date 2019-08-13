import PropTypes from "prop-types";
import React from "react";
import BannerImage from "./myBanner.jpeg";
import "./myBanner.scss";

export default function MyBanner(props) {
  return (
    <div className="myBanner">
      {props.caption}
      <img src={BannerImage} />
    </div>
  );
}

MyBanner.propTypes = {
  caption: PropTypes.string.isRequired
};
