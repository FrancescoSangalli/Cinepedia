import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Header from './components/header/Header';
import Watchlist from './components/watchlist/Watchlist';
import Watched from './components/watched/Watched';
import Add from './components/add/Add';
import GlobalProvider from './context/GlobalState';
import Footer from './components/footer/Footer';
import FilmInfo from './components/filmInfo/FilmInfo'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Watchlist/>}/>

          <Route exact path="/watched" element={<Watched/>}/>

          <Route exact path="/add" element={<Add/>}/>

          <Route exact path="/:id" element={<FilmInfo/>}/>
        </Routes>
        <Footer/>
      </Router>
    </GlobalProvider>
  );
}

export default App;
