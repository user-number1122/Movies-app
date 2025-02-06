import { useCallback } from 'react';
import { message, notification } from 'antd';

export const useRating = ({ guestSessionId, setSearchResults, setRatedMovies, searchResults, API_KEY, BASE_URL }) => {
  const rateMovie = useCallback(
    async (movieId, value) => {
      if (!guestSessionId) {
        message.error('Guest session ID is required');
        return;
      }
      setSearchResults((prevResults) => prevResults.map((movie) => (movie.id === movieId ? { ...movie, rating: value } : movie)));
      setRatedMovies((prevMovies) => {
        const movieExists = prevMovies.some((movie) => movie.id === movieId);
        if (movieExists) {
          return prevMovies.map((movie) => (movie.id === movieId ? { ...movie, rating: value } : movie));
        } else {
          const newlyRatedMovie = searchResults.find((movie) => movie.id === movieId);
          return newlyRatedMovie ? [...prevMovies, { ...newlyRatedMovie, rating: value }] : prevMovies;
        }
      });

      try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({ value }),
        });

        if (response.ok) {
          notification.success({
            message: 'Success!',
            description: 'You have successfully completed the task.',
            placement: 'topLeft',
            duration: 2,
          });
        } else {
          const errorData = await response.json();
          message.error(`Error: ${errorData.status_message}`);
        }
      } catch (error) {
        console.error('Error rating movie:', error);
        message.error('Failed to submit rating.');
      }
    },
    [guestSessionId, setSearchResults, setRatedMovies, searchResults, API_KEY, BASE_URL]
  );

  return { rateMovie };
};
