const express = require('express')
const postService = require('../services/postService.js')
const deleteService = require('../services/deleteService.js')
const showDataService = require('../services/showDataService.js')
let data = require('../../data.json');

const router = express.Router()

//GET
router.get('/', (req, res) => {
    res.render('index.html')
});

router.get('/addName', (req, res) =>{
    res.render('addName.html')
});

router.get('/showData', (req, res) => {
    showDataService.showData(req, res)
})

router.get('/deleteName', (req, res) => {
    res.render('deleteName.html', {
        data: data
    })
})

//POST
router.post('/addName', (req,res) =>  postService.addName(req, res))

//Delete
router.delete('/deleteName/:name', (req, res) =>{
    deleteService.deleteName(req, res)
})

module.exports = router