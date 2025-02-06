import React from 'react';
import styles from './MoviePoster.module.scss';
const MoviePoster = ({ movie }) => {
  return (
    <div className={styles.cardImage}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={styles.cardImageContent} />
    </div>
  );
};
export default MoviePoster;
