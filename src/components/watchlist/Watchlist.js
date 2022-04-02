import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import FilmCard from '../filmCard/FilmCard';

function Watchlist() {
  const {watchlist} = useContext(GlobalContext);

  return (
    <section className="watchlist mt-5">
      <h1 className="text-center fw-bold mb-5">Watchlist</h1>
      {watchlist.length > 0 ?
        <div className="film-card-container d-flex">
          {watchlist.map(film => (
            <div key={film.id} className="me mb-3">
              <FilmCard film={film} type="watchlist"/>
            </div>
          ))}
        </div>
        : <h3 className="text-center text-secondary">No film in watchlist</h3>
      }
    </section>
  )
}

export default Watchlist;
