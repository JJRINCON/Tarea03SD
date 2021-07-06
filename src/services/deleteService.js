const fs = require('fs');
let data = require('../../data.json');

function deleteName(req, res){
    let nameToDelete = req.params.name
    for (let i = 0; i < data.length; i++) {
        if(nameToDelete == data[i].name){
            data.splice(i,1)
            res.send("<h2>Nombre eliminado con éxito</h2>")
        }
    }
    fs.writeFileSync('data.json', JSON.stringify(data))
}

module.exports = {
    deleteName
}

