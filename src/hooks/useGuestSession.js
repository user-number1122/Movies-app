import { useState, useEffect, useCallback } from 'react';
import { message } from 'antd';

export const useGuestSession = (fetchRatedMovies, ratedPage, API_KEY, BASE_URL) => {
  const [guestSessionId, setGuestSessionId] = useState('');

  const initializeSession = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}/authentication/guest_session/new?api_key=${API_KEY}`);
      const data = await response.json();
      if (data.success) {
        setGuestSessionId(data.guest_session_id);
        fetchRatedMovies(data.guest_session_id, ratedPage);
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('guest_session_id', data.guest_session_id);
        window.history.pushState(null, '', newUrl.toString());
      } else {
        message.error('Failed to create guest session.');
      }
    } catch (error) {
      console.error('Error initializing session:', error);
    }
  }, [fetchRatedMovies, ratedPage, API_KEY, BASE_URL]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('guest_session_id');
    if (sessionId) {
      setGuestSessionId(sessionId);
      fetchRatedMovies(sessionId, ratedPage);
    } else {
      initializeSession();
    }
  }, [fetchRatedMovies, initializeSession, ratedPage]);

  return { guestSessionId };
};
