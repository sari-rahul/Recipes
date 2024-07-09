import React from 'react';
import HeaderImage from '../../assets/recipes-bandimage.jpeg';
import styles from './ImageBand.module.css';

const ImageBand = () => {
  return (
    <div className={styles.ImageBandContainer}>
      <img src={HeaderImage} alt="Band Image" />
      <div
        className={styles.opaqueOverlay}>
      </div>
    </div>
  );
}

export default ImageBand;
