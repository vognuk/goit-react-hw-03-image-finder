import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ src, alt, largeImageUrl }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        data-large-url={largeImageUrl}
        className={s.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = PropTypes.shape({
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
}).isRequired;

export default ImageGalleryItem;
