import PropTypes from "prop-types";
import React from "react";
import ImageMetaData from "./ImageMetaData";

export default function SlideThumb(props) {
  let { imageMetaData } = props;

  return (
    <div
      className="swiper-slide"
      style={{ backgroundImage: `url(${imageMetaData.url})` }}
    />
  );
}

SlideThumb.propTypes = {
  imageMetaData: PropTypes.instanceOf(ImageMetaData).isRequired
};
