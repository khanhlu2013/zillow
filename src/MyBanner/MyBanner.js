import PropTypes from "prop-types";
import React from "react";

export default function MyBanner(props) {
  return <div>{props.caption}</div>;
}

MyBanner.propTypes = {
  caption: PropTypes.string.isRequired
};
