import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import './filmControls.css';

function FilmControls({film, type}) {
  const {
    removeFilmFromWatchlist,
    addFilmToWatched,
    moveToWatchlist,
    removeFromWatched
  } = useContext(GlobalContext);

  function remove() {
    removeFilmFromWatchlist(film.id);
  }

  function toWatched() {
    addFilmToWatched(film);
  }

  function toWatchlist() {
    moveToWatchlist(film);
  }

  function deleteFromWatched() {
    removeFromWatched(film.id);
  }

  return (
    <div className="icon-container text-center position-absolute">
      {type === "watchlist" && (
        <>
          <button className="btn btn-warning me-2" onClick={toWatched}>
            <i className="fas fa-eye"></i>
          </button>

          <button className="btn btn-warning" onClick={remove}>
            <i className="fas fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="btn btn-warning me-2" onClick={toWatchlist}>
            <i className="fas fa-eye-slash"></i>
          </button>

          <button className="btn btn-warning" onClick={deleteFromWatched}>
            <i className="fas fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default FilmControls;
