var connection = require("./connection");

function addFavorite(req, res) {
    const idFavorite = req.body.id;
    const sql = "INSERT INTO favorites (character_id) VALUES ("+ idFavorite +")";

    connection.query(sql, function (error, results, fields) {
        if (error) res.send("Character not inserted");
        res.send(JSON.stringify(results));
    });
};

function deleteFavorite(req, res) {
    const idFavorite = req.params.id;
    let sql = "DELETE FROM favorites WHERE character_id = " + idFavorite;

    connection.query(sql, function (error, results, fields) {
        if (error) res.send("Character not deleted");
            res.status(200).send();
        });
    }
    
function fetchFavorites(req, res){
    let sql = "SELECT * FROM marvel.favorites";

    connection.query(sql, function (error, results, fields) {
        if (error) res.send("Could not get results");
        res.send(JSON.stringify(results));
        });
}

    module.exports = {
        addFavorite,
        deleteFavorite,
        fetchFavorites
    }