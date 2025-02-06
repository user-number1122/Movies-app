import React from 'react';
import MoviePoster from './MoviePoster';
import MovieGenre from './MovieGenre';
import MovieRating from './MovieRating';
import MovieOverview from './MovieOverview';
import MovieDetails from './MovieDetails';
import FilmRatingRing from './FilmRatingRing';
import styles from './MovieCard.module.scss';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Card } from 'antd';

const MovieCard = ({ movie, onRatingChange, isLoading }) => {
  const isMobile = useMediaQuery('(max-width: 576px)');

  return (
    <Card
      hoverable
      className={styles.cardMobile}
      style={{ width: '451px', height: '279px', maxWidth: '451px', maxHeight: '279px', padding: '0', display: 'flex', borderRadius: '0', position: 'relative', margin: '0' }}
      bodyStyle={{ display: isMobile ? 'block' : 'flex', padding: '0', width: '100%', height: '100%', margin: '0' }}
    >
      {isMobile ? (
        <>
          <div style={{ display: 'flex' }}>
            <MoviePoster movie={movie} isLoading={isLoading} />
            <div className={styles.cardContent}>
              <MovieDetails movie={movie} />
              <MovieGenre movie={movie} />
            </div>
          </div>
          <MovieOverview movie={movie} />
          <MovieRating movie={movie} onRatingChange={onRatingChange} />
          <FilmRatingRing movie={movie} />
        </>
      ) : (
        <>
          <MoviePoster movie={movie} />
          <div className={styles.cardContent}>
            <MovieDetails movie={movie} />
            <MovieGenre movie={movie} />
            <MovieOverview movie={movie} />
            <MovieRating movie={movie} onRatingChange={onRatingChange} />
            <FilmRatingRing movie={movie} />
          </div>
        </>
      )}
    </Card>
  );
};
export default MovieCard;
