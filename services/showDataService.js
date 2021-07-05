let data = require('../data.json');

function showData(req, res) {    
    var names = ""
    for (let index = 0; index < data.length; index++) {

        names += "<br>" + "- " + data[index].name
    }
    res.send("<h2>Nombres: " + names + "</h2>")
}

module.exports = {
    showData
}