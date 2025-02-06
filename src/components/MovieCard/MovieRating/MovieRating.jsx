import React from 'react';
import { Rate } from 'antd';
import styles from './MovieRating.module.scss';

const MovieRating = ({ movie, onRatingChange }) => {
  return <Rate allowHalf value={movie.rating} onChange={(value) => onRatingChange(movie.id, value)} count={10} className={styles.cardRate} />;
};

export default MovieRating;
