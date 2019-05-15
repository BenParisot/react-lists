import React from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';
import Styles from '../../styles/main.css';

export default function PhotoAlbum({ title, photos }) {
  return (
    <section className={Styles.album}>
      <h2>{title}</h2>
      <Photos photos={photos} />
    </section>
  );   
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired
};
