const fs = require('fs');
let data = require('../../data.json');

function addName(req, res) {    
    console.log(req.body)
    data.push({"name": req.body.name})
    fs.writeFileSync('data.json', JSON.stringify(data))
    res.send("<h2> Nombre añadido con éxito </h2>");
}

module.exports = {
    addName
}
