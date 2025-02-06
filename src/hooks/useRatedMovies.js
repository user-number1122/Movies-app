import { useState, useCallback } from 'react';
export const useRatedMovies = (API_KEY, BASE_URL) => {
  const [ratedMovies, setRatedMovies] = useState([]);
  const [isRatedLoading, setIsRatedLoading] = useState(false);
  const [totalRatedPages, setTotalRatedPages] = useState(1);

  const fetchRatedMovies = useCallback(
    async (sessionId, page) => {
      if (!sessionId) return;
      setIsRatedLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/guest_session/${sessionId}/rated/movies?api_key=${API_KEY}&page=${page}`);
        const data = await response.json();
        if (data.results) {
          setRatedMovies(data.results);
          setTotalRatedPages(data.total_pages);
        }
      } catch (error) {
        console.error('Error fetching rated movies:', error);
      } finally {
        setIsRatedLoading(false);
      }
    },
    [API_KEY, BASE_URL]
  );
  return { ratedMovies, isRatedLoading, totalRatedPages, fetchRatedMovies, setRatedMovies };
};
