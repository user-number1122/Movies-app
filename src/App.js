import React, { useState, useEffect } from 'react';
import { Layout, Alert } from 'antd';
import styles from './App.module.scss';
import MovieList from './components/MovieList';
import PaginationControl from './components/PaginationControl';
import TabsNavigation from './components/TabsNavigation';
import SearchInput from './components/SearchInput';
import { useRatedMovies } from './hooks/useRatedMovies';
import { useRating } from './hooks/useRating';
import { useGuestSession } from './hooks/useGuestSession';
import { useMovies } from './hooks/useMovies';
import useNetworkStatus from './hooks/useNetworkStatus';
import { createDebouncedSearch } from './utils/debounceSearch';
import { handleKeyDown } from './utils/handleKeyDown';
import { handleTabChange } from './utils/handleTabChange';
import { handleInputChange } from './utils/handleInputChange';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchPage, setSearchPage] = useState(1);
  const [ratedPage, setRatedPage] = useState(1);
  const [activeTab, setActiveTab] = useState('1');
  // инициализация кастомных хуков
  const { ratedMovies, isRatedLoading, totalRatedPages, fetchRatedMovies, setRatedMovies } = useRatedMovies(API_KEY, BASE_URL);
  const { guestSessionId } = useGuestSession(fetchRatedMovies, ratedPage, API_KEY, BASE_URL);
  const { searchResults, isSearchLoading, error, setError, handleSearch, setSearchResults } = useMovies({ BASE_URL, API_KEY, ratedMovies });
  const { rateMovie } = useRating({ guestSessionId, setSearchResults, setRatedMovies, fetchRatedMovies, ratedPage, searchResults, BASE_URL, API_KEY });
  const isOffline = useNetworkStatus();

  useEffect(() => {
    if (activeTab === '2' && guestSessionId) {
      fetchRatedMovies(guestSessionId, ratedPage);
    }
  }, [activeTab, guestSessionId, ratedPage, fetchRatedMovies]);

  const debouncedSearch = createDebouncedSearch((value) => {
    handleSearch(value, 1);
  });

  return (
    <Layout className={styles.movieLayout}>
      <Header className={styles.movieHeader}>
        <TabsNavigation onTabChange={(key) => handleTabChange(key, guestSessionId, ratedPage, fetchRatedMovies, setActiveTab, setError)} activeTab={activeTab} />
        {activeTab === '1' && <SearchInput searchKeyword={searchKeyword} onSearch={handleSearch} onInputChange={(e) => handleInputChange(e, setSearchKeyword, setSearchPage, setError, debouncedSearch, setSearchResults, ratedMovies)} onKeyDown={handleKeyDown(searchKeyword, handleSearch)} />}
      </Header>
      <Content style={{ margin: '0 auto' }}>
        {isOffline && <Alert message="No Network" description="You are currently offline. Please check your internet connection." type="error" showIcon style={{ marginBottom: 20 }} />}
        {activeTab === '1' && (
          <>
            {error && <Alert message="Error" description={error} type="error" showIcon />}
            <MovieList movies={searchResults} isLoading={isSearchLoading} onRatingChange={rateMovie} pageSize={6} />
          </>
        )}
        {activeTab === '2' && <MovieList movies={ratedMovies} onRatingChange={rateMovie} isLoading={isRatedLoading} pageSize={6} />}
      </Content>
      <Footer className={styles.movieFooter}>
        <PaginationControl
          activeTab={activeTab}
          searchPage={searchPage}
          ratedPage={ratedPage}
          totalRatedPages={totalRatedPages}
          onSearchPageChange={(page) => {
            setSearchPage(page);
            handleSearch(searchKeyword, page);
          }}
          onRatedPageChange={(page) => {
            setRatedPage(page);
            fetchRatedMovies(guestSessionId, page);
          }}
        />
      </Footer>
    </Layout>
  );
};

export default App;
