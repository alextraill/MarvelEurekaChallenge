const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controllerCharacters = require('./controllers/controllerCharacters');
const controllerFavorite = require('./controllers/controllerFavorite');

const app =  express();

// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cors());

app.get('/characters', controllerCharacters.getCharacters);
app.get('/characters/:id', controllerCharacters.getCharacter);
app.get('/favorites', controllerFavorite.fetchFavorites);
app.post('/favorites', controllerFavorite.addFavorite);
app.delete('/favorites/:id', controllerFavorite.deleteFavorite);

app.listen('3001', function(){
    console.log('My server is running at port 3001');
});