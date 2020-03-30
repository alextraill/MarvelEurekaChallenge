import React from 'react';


import history from '../history';

function Character(props) {
  return (
    <div className="column is-one-quarter">
      <div className="card rounded-border">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.character.thumbnail.path + "." + props.character.thumbnail.extension}></img>
          </figure>
        </div>
        <div className="card-content">
          <a onClick={() => history.push('/CharacterPage/' + props.character.id)}>
            <div className="media-content has-text-centered">
              <p className="title is-4">{props.character.name}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );

}

export default Character;
