import React, { createContext, useState, useEffect } from 'react';

export const GenreContext = createContext();

const GenreProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const API_URL = 'https://api.themoviedb.org/3/genre/movie/list';

      try {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch genres');
        }
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenres();
  }, []);

  return <GenreContext.Provider value={genres}>{children}</GenreContext.Provider>;
};

export default GenreProvider;
