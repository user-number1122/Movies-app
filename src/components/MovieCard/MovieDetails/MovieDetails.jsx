import React from 'react';
import { Card } from 'antd';
import { format } from 'date-fns';
import styles from './MovieDetails.module.scss';

const { Meta } = Card;

const MovieDetails = ({ movie }) => {
  const maxTitleLength = 62;
  const truncatedTitle = movie.title?.length > maxTitleLength ? movie.title.slice(0, maxTitleLength) + '...' : movie.title;

  return <Meta title={<div className={styles.cardTitle}>{truncatedTitle || 'Описание отсутствует'} </div>} description={<div className={styles.cardDescription}>{movie.release_date ? format(new Date(movie.release_date), 'MMMM d, yyyy') : 'Дата не указана'}</div>} />;
};
export default MovieDetails;
