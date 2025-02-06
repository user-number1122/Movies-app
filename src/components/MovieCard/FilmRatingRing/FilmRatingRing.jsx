import React from 'react';
import styles from './FilmRatingRing.module.scss';

const FilmRatingRing = ({ movie }) => {
  return <div className={`${styles.cardRating} ${movie.rating === 0 ? styles['rating-0'] : movie.rating <= 3 ? styles['rating-low'] : movie.rating <= 5 ? styles['rating-mid'] : movie.rating <= 7 ? styles['rating-high'] : styles['rating-excellent']}`}>{movie.rating || 0}</div>;
};

export default FilmRatingRing;
