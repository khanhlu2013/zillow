import PropTypes from "prop-types";
import React from "react";

export default function MyButton(props) {
  return (
    <button
      type="button"
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
