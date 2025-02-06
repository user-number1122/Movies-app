export const handleTabChange = (key, guestSessionId, ratedPage, fetchRatedMovies, setActiveTab, setError) => {
  setActiveTab(key);
  setError('');
  if (key === '2' && guestSessionId) {
    fetchRatedMovies(guestSessionId, ratedPage);
  }
};
