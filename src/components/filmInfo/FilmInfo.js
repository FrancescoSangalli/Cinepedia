import React, {useState, useEffect} from "react";
 import { useParams } from "react-router-dom";
import axios from "axios";
import './filmInfo.css';

const api_key = process.env.REACT_APP_API_KEY;

function FilmInfo(props) {
  const {id} = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const [film, setFilm] = useState([]);
  const fetchData = async () => {
    try {
      await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
        .then(film => {
          setFilm(film.data);
        })
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="film-info container-fluid d-flex">
      <div className="paper mt-5">
        <h1 className="text-center mb-5 intro">Film Info</h1>
        <div className="d-flex">
          {film.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} className="cover"/> : ""}
          <div className="info ms-5">
            <h1>{film.title}</h1>
            {film.genres ? <p>Genre: {film.genres[0].name}</p> : ""}
            <p>Relase Date: {film.release_date}</p>
            <p>Runtime: {film.runtime} min</p>
            <p>Vote Avarage: {film.vote_average}/10</p>
          </div>
        </div>
        <p className="des mt-5"><span style={{fontWeight: "bold"}}>Overview:</span><br/>
          {film.overview}
        </p>
      </div>
    </div>
  )
}

export default FilmInfo;
