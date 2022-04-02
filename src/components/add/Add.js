import React, {useState} from 'react';
import axios from 'axios';
import ResultCard from '../resultCard/ResultCard';
import './add.css';

const api_key = process.env.REACT_APP_API_KEY;

function Add() {
  const [film, setFilm] = useState('');
  const [results, setResults] = useState([]);

  async function handleChange(e) {
    e.preventDefault();
    const val = e.target.value;
    setFilm(val);

    try {
      await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en&query=${val}`)
        .then(data => {
          console.log(data.data.results);
          setResults(data.data.results);
        })
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="add mt-5">
      <form className="mb-3">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span>
          <input
            type="text"
            className="form-control"
            placeholder="Search film..."
            aria-label="Search"
            aria-describedby="basic-addon1"
            value={film}
            onChange={handleChange}
          />
        </div>
      </form>

      {results.length > 0 && (
        <ul>
          {results.map(film => (
            <li key={film.id}>
              <ResultCard film={film}/>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Add;
