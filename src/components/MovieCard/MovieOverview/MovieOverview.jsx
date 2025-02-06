import React from 'react';
import { Typography } from 'antd';
import styles from './MovieOverview.module.scss';
import { calculateDescriptionLines } from '../../../utils/calculateDescriptionLines';

const { Text } = Typography;

const MovieOverview = ({ movie }) => {
  const descriptionLines = calculateDescriptionLines(
    movie.title || '',
    (movie.genres || []).map((genre) => genre.name)
  );

  const maxOverviewLength = 204;
  const truncatedOverview = movie.overview?.length > maxOverviewLength ? movie.overview.slice(0, maxOverviewLength) + '...' : movie.overview;
  return (
    <Text className={styles.cardOverview} style={{ '--line-clamp': descriptionLines }}>
      {truncatedOverview || 'Описание отсутствует'}
    </Text>
  );
};

export default MovieOverview;
