import PropTypes from "prop-types";
import React from "react";
import "./myButton.scss";

export default function MyButton(props) {
  return (
    <button
      type="button"
      className="myButton"
      onClick={() => {
        console.log("button clicked!");
      }}
    >
      {props.caption}
    </button>
  );
}

MyButton.propTypes = {
  caption: PropTypes.string.isRequired
};
