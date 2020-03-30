import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.css';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import './App.css'
import IndividualCharacter from './components/IndividualCharacter';
import history from './history';

function CharacterPage(props) {
    const [character, setCharacter] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);

    const { id } = props.match.params;

    async function fetchCharacter() {
        setIsLoading(true);
        const response = await axios.get('http://localhost:3001/characters/' + id);
        setCharacter(response.data.results[0]);
        setIsLoading(false);
    };
    async function fetchFavorites() {
        setIsLoading(true);
        const response = await axios.get('http://localhost:3001/favorites');
        setFavorites(response.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchCharacter();
        fetchFavorites();
    }, []);

    async function addFavorite() {
        setIsLoading(true);
        await axios.post('http://localhost:3001/favorites', {
            id: character.id
        });
        fetchFavorites();
    }
    async function deleteFavorite() {
        setIsLoading(true);
        await axios.delete('http://localhost:3001/favorites/' + character.id);
        fetchFavorites();
    }

    return (
        <>
            <div className="has-background-image">
                <section className="hero is-small">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <img src={require('./images/marvelLogo.png')} />
                        </div>
                        <button onClick={() => history.push('/')} className="button is-info has-3-margin">Home</button>
                        <button onClick={() => history.push('/Favorites/')} className="button is-warning has-3-margin">Favorites</button>
                        <div className="container has-text-centered">
                            {isLoading || character === null || favorites.length === 0 ? (<Loader
                                type="Triangle"
                                color="#ED1A23"
                                height={250}
                                width={250}

                            />) :
                                <IndividualCharacter character={character} addFavorite={addFavorite} deleteFavorite={deleteFavorite} favorites={favorites} />
                            }
                        </div>
                    </div>

                </section>

            </div>
        </>

    );
}

export default CharacterPage;



