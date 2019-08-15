import PropTypes from "prop-types";
import React, { Fragment } from "react";
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper/dist/js/swiper.esm.bundle";
import "./imageGallery.css";
import ImageMetaData from "./ImageMetaData";
import SlideMain from "./SlideMain";
import SlideThumb from "./SlideThumb";

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    });
    const swiper = new Swiper(".gallery-top", {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }
  render() {
    return (
      <Fragment>
        <div className="swiper-container gallery-top">
          <div className="swiper-wrapper">
            {this.props.data.map((imageMetaData, index) => (
              <SlideMain imageMetaData={imageMetaData} key={index} />
            ))}
          </div>
          <div className="swiper-pagination" />

          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />

          <div className="swiper-scrollbar" />
        </div>

        <div className="swiper-container gallery-thumbs">
          <div className="swiper-wrapper">
            {this.props.data.map((imageMetaData, index) => (
              <SlideThumb imageMetaData={imageMetaData} key={index} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(ImageMetaData)).isRequired
};
