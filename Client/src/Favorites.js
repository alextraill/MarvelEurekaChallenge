import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.css';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import './App.css'
import Character from './components/Character';
import history from './history';

function Favorites() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);


  async function fetchFavorites() {
    setIsLoading(true);
    const response = await axios.get('http://localhost:3001/favorites');
    setFavorites(response.data);
    setIsLoading(false);

  }

  function fetchCharacters() {

    favorites.map(async (favorite, key) => {
      const response = await axios.get('http://localhost:3001/characters/' + favorite.character_id);
      const newCharacter = response.data.results[0];
      setCharacters(prevCharacters => [...prevCharacters, newCharacter]);
    });
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [favorites]);


  return (
    <>
      <div className="has-background-image">
        <section className="hero is-small">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-warning is-big-text">
                Favorites
      </h1>
              <img src={require('./images/marvelLogo.png')} />
            </div>
            <button onClick={() => history.push('/')} className="button is-info has-3-margin">Home</button>
            <div className="container has-text-centered">
              {isLoading ? (<Loader
                type="Triangle"
                color="#ED1A23"
                height={250}
                width={250}
              />) : <>
                  <div className="container has-10-padding">
                    <div className="columns is-multiline is-mobile">
                      {characters.map((char, key) =>
                        <Character key={key} character={char}/>)}
                    </div>
                  </div>
                </>}
            </div>
          </div>

        </section>
      </div>
    </>

  );
}

export default Favorites;
