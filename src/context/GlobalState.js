import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
  watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : []
};

export const GlobalContext = createContext(initialState);

function GlobalProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  function addFilmToWatchlist(film) {
    dispatch({type: 'ADD_FILM_TO_WATCHLIST', payload: film});
  }

  function removeFilmFromWatchlist(id) {
    dispatch({type: 'REMOVE_FILM_FROM_WATCHLIST', payload: id});
  }

  function addFilmToWatched(film) {
    dispatch({type: 'ADD_FILM_TO_WATCHED', payload: film});
  }

  function moveToWatchlist(film) {
    dispatch({type: 'MOVE_TO_WATCHLIST', payload: film});
  }

  function removeFromWatched(id) {
    dispatch({type: 'REMOVE_FROM_WATCHED', payload: id});
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addFilmToWatchlist,
        removeFilmFromWatchlist,
        addFilmToWatched,
        moveToWatchlist,
        removeFromWatched
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;
