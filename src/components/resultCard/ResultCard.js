import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import {GlobalContext} from '../../context/GlobalState';
import './resultCard.css';

function ResultCard({film}) {
  const {addFilmToWatchlist, addFilmToWatched, watchlist, watched} = useContext(GlobalContext);
  let storedFilm = watchlist.find(obj => obj.id  === film.id);
  let storedFilmWatched = watched.find(obj => obj.id  === film.id);
  const watchlistDisabled = storedFilm ? true : storedFilmWatched ? true : false;
  const watchedDisabled = storedFilmWatched ? true : false;

  function handleClick() {
    addFilmToWatchlist(film);
  }

  function handleWatched() {
    addFilmToWatched(film);
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-lg-2 col-md-3 col-4">
          {film.poster_path ?
            <Link to={`/${film.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                className="img-fluid rounded-start result-card-img"
                alt={`${film.title}`}
              />
            </Link>
          : ""}
        </div>
        <div className="col-lg-10 col-md-9 col-8">
          <div className="card-body">
            <Link to={`/${film.id}`}>
              <h5 className="card-title">{film.title}</h5>
            </Link>
            <p className="card-text">Relase date: {film.release_date ? film.release_date.substring(0, 4) : '-'}</p>
            <p className="card-text"><small className="text-muted">Vote avarage: {film.vote_average ? film.vote_average : '-'}/10</small></p>
            <div className="mt-3">
              <button
                className="btn btn-success me-1"
                disabled={watchlistDisabled}
                onClick={handleClick}
              >Watchlist</button>

              <button
                className="btn btn-success me-1"
                disabled={watchedDisabled}
                onClick={handleWatched}
              >Watched</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
