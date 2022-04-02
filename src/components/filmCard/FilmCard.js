import React from 'react';
import { Link } from "react-router-dom";
import FilmControls from '../filmControls/FilmControls';
import './filmCard.css';

function FilmCard({film, type}) {
  return (
    <div className="film-control position-relative">
      {film.poster_path ?
        <Link to={`/${film.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            className="img-fluid rounded-start film-card-img"
            alt={`${film.title}`}
          />
        </Link>
      : <Link to={`/${film.id}`}>
        film.title
      </Link>}

      <FilmControls type={type} film={film}/>
    </div>
  );
}

export default FilmCard;
