export const handleInputChange = (e, setSearchKeyword, setSearchPage, setError, debouncedSearch, setSearchResults, ratedMovies) => {
  const value = e.target.value;
  setSearchKeyword(value);
  setSearchPage(1);
  setError('');
  if (value.trim()) {
    debouncedSearch(value);
  } else {
    setSearchResults([]);
  }
  setSearchResults((prevResults) =>
    prevResults.map((movie) => {
      const existingRating = ratedMovies.find((ratedMovie) => ratedMovie.id === movie.id);
      return { ...movie, rating: existingRating ? existingRating.rating : movie.rating || 0 };
    })
  );
};
