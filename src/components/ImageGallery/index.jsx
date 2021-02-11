import { Component } from "react";
import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";

class ImageGallery extends Component {
  static propTypes = PropTypes.shape({
    imageList: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  }).isRequired;

  render() {
    const { onClick, imageList } = this.props;

    return (
      <ul className={s.ImageGallery} onClick={onClick}>
        {imageList.map(({ webformatURL, type, largeImageURL }, index) => (
          <ImageGalleryItem
            key={index}
            src={webformatURL}
            alt={type}
            largeImageUrl={largeImageURL}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
