import { useState } from 'react';

export const useMovies = ({ BASE_URL, API_KEY, ratedMovies }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (keyword, page) => {
    setIsSearchLoading(true);
    setError('');
    if (!keyword.trim()) {
      setSearchResults([]);
      setIsSearchLoading(false);
      return;
    }
    try {
      const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}&page=${page}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const updatedResults = data.results.map((movie) => {
          const existingRating = ratedMovies.find((ratedMovie) => ratedMovie.id === movie.id);
          return { ...movie, rating: existingRating ? existingRating.rating : 0 };
        });
        setSearchResults(updatedResults);
      } else {
        setSearchResults([]);
        setError('No movies found for your search.');
      }
    } catch (error) {
      setError('Failed to fetch search results. Please try again later.');
    } finally {
      setIsSearchLoading(false);
    }
  };
  return { searchResults, isSearchLoading, error, setError, handleSearch, setSearchResults };
};
