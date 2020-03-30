
const favoriteService = require('../favoriteService');

const addFavorite =  function (req,res){
    favoriteService.addFavorite(req,res);
};

const deleteFavorite =  function (req,res){
    favoriteService.deleteFavorite(req, res);
};

const fetchFavorites = function(req, res){
    favoriteService.fetchFavorites(req, res);
};

module.exports = {
    addFavorite,
    deleteFavorite,
    fetchFavorites
}