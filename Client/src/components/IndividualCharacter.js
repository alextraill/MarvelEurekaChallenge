import React from 'react';


function IndividualCharacter(props) {
    const comics = props.character.comics.items;
    const listcomics = comics.map((comic) => <li>{comic.name}</li>);

    return (
        <>
            <div className="container has-background-white rounded-border">
                <div className="columns is-vcentered">
                    <div className="column">
                        <img className="has-10-margin" src={props.character.thumbnail.path + "." + props.character.thumbnail.extension}></img>
                    </div>
                    <div className="column has-3-margin">
                        <div className="has-text-centered">
                            <p className="title is-big-text">{props.character.name}</p>
                            {props.favorites.some(favorite => favorite.character_id === props.character.id) ? <><button onClick={props.deleteFavorite} className="button is-warning">Remove from favorites</button></> : <><button onClick={props.addFavorite} className="button is-warning">Add to favorites</button></>}

                            <p className="has-10-padding">{props.character.description}</p>
                            <p className="title">Comics:</p>
                        </div>
                        <div className="has-text-left has-3-margin">
                            <ul>{listcomics}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndividualCharacter;