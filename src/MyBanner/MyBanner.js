import PropTypes from "prop-types";
import React from "react";
import BannerImage from "./myBanner.jpeg";
import "./myBanner.scss";
import LargeBannerIcon from "./myBannerIcon.large.svg";
import SmallBannerIcon from "./myBannerIcon.small.svg";

export default function MyBanner(props) {
  return (
    <div className="myBanner">
      {props.caption}
      <img src={BannerImage} />
      <img src={SmallBannerIcon} />
      <img src={LargeBannerIcon} />
    </div>
  );
}

MyBanner.propTypes = {
  caption: PropTypes.string.isRequired
};
