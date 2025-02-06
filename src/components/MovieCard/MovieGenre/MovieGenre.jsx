import React, { useContext } from 'react';
import { Typography } from 'antd';
import { GenreContext } from '../../../context/GenreContext';
import styles from './MovieGenre.module.scss';

const { Text } = Typography;

const MovieGenre = ({ movie }) => {
  const genres = useContext(GenreContext);

  const genreIds = movie.genre_ids || [];

  return (
    <Text className={styles.cardGenres}>
      {genreIds.length > 0 ? (
        genreIds.map((id) => {
          const genreName = genres.find((genre) => genre.id === id)?.name || 'N/A';
          return (
            <span key={id} className={styles.genreTag}>
              {genreName}
            </span>
          );
        })
      ) : (
        <span className={styles.genreTag}>N/A</span>
      )}
    </Text>
  );
};

export default MovieGenre;
