import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import MovieCard from '../MovieCard';
import styles from './MovieList.module.scss';
import SkeletonMovieList from './SkeletonMovieList';

const MovieList = ({ movies, onRatingChange, isLoading }) => {
  const [gutterSize, setGutterSize] = useState([36, 36]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const updateLayout = () => {
      setIsMobile(window.innerWidth <= 576);
      if (window.innerWidth <= 576) {
        setGutterSize([20, 20]);
      } else {
        setGutterSize([36, 36]);
      }
    };
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => {
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  if (isLoading) {
    return <SkeletonMovieList isMobile={isMobile} gutterSize={gutterSize} />;
  }

  return (
    <Row gutter={gutterSize} justify="start" className={styles.movieList}>
      {movies.map((movie) => (
        <Col
          xs={24}
          sm={12}
          key={movie.id}
          style={{
            boxSizing: 'border-box',
            maxWidth: '938px',
          }}
        >
          <MovieCard movie={movie} onRatingChange={onRatingChange} isLoading={isLoading} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
