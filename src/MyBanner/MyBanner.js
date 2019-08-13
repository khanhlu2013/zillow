import PropTypes from "prop-types";
import React from "react";
import "./myBanner.scss";

export default function MyBanner(props) {
  return <div className="myBanner">{props.caption}</div>;
}

MyBanner.propTypes = {
  caption: PropTypes.string.isRequired
};
