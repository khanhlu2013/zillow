import PropTypes from "prop-types";
import React from "react";
import ImageMetaData from "./ImageMetaData";

export default function SlideMain(props) {
  let { imageMetaData } = props;

  return (
    <div
      className="swiper-slide"
      style={{ backgroundImage: `url(${imageMetaData.url})` }}
    >
      <div>{imageMetaData.caption}</div>
    </div>
  );
}

SlideMain.propTypes = {
  imageMetaData: PropTypes.instanceOf(ImageMetaData).isRequired
};
