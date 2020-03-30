import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.css';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import './App.css'
import Character from './components/Character';
import Pagination from './components/Pagination';
import history from './history';


function App() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");


  async function fetchCharacters() {
    setIsLoading(true);
    const response = await axios.get('http://localhost:3001/characters/?pageNumber=' + currentPage);
    setIsLoading(false);
    setCharacters(response.data.results);
    setTotalPages(response.data.totalPages);
  };

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  function handleClickPageChange(page) {
    setCurrentPage(page)
  }
  async function handleSearch() {
    if (searchText !== "") {
      setIsLoading(true);
      const response = await axios.get('http://localhost:3001/characters/?name=' + searchText);
      setIsLoading(false);
      setCharacters(response.data.results);

    }
  }
  function handleChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <div className="has-background-image">
        <section className="hero is-small">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-white is-big-text">
                Your superheroes</h1>
              <img src={require('./images/marvelLogo.png')} />
            </div>
            <button onClick={() => history.push('/Favorites/')} className="button is-warning has-3-margin">Favorites</button>
          <div className="search">
                    <input className="input text-input" type="text" placeholder="e.g. Spider-man" value={searchText} onChange={handleChange}></input>
                    <button onClick={handleSearch} className="button is-info">Search</button>
                  </div>
                  </div>
          <div className="container full-width has-text-centered">
            {isLoading ? (<Loader
              type="Triangle"
              color="#ED1A23"
              height={250}
              width={250}
            />) : characters.length === 0 ? <><div className="container has-text-centered">
              <p className="title has-text-red has-3-margin">No superheroes with the name {searchText} exist</p>
            </div></> : <>
                  <div className="container has-10-padding">
                    <div className="columns is-multiline is-mobile">

                      {characters.map((char, key) =>
                        <Character key={key} character={char} />
                      )}
                    </div>
                  </div></>}
          </div>
        </section>
        <footer className="footer has-background-image">
          <Pagination currentPage={currentPage} totalPages={totalPages} changePage={handleClickPageChange} />
        </footer>
      </div>
    </>

  );
}

export default App;
