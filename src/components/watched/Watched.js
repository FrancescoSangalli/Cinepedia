import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalState';
import FilmCard from '../filmCard/FilmCard';

function Watched() {
  const {watched} = useContext(GlobalContext);

  return (
    <section className="watched mt-5">
      <h1 className="text-center fw-bold mb-5">Watched</h1>
      {watched.length > 0 ?
        <div className="film-card-container d-flex">
          {watched.map(film => (
            <div key={film.id} className="me mb-3">
              <FilmCard film={film} type="watched"/>
            </div>
          ))}
        </div>
        : <h3 className="text-center text-secondary">No film watched</h3>
      }
    </section>
  )
}

export default Watched;
