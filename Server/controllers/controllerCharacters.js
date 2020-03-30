const marvelService = require('../marvelService');

const getCharacters =  async function (req,res){
    const results = await marvelService.getCharacters(req.query.pageNumber, req.query.name);
    res.send(results);
};

const getCharacter =  async function (req,res){
    const results = await marvelService.getCharacter(req.params.id);
    res.send(results);
};


module.exports = {
    getCharacters,
    getCharacter
}
