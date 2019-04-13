const express = require('express');
const config = require('../config');
let router = express.Router();
const createPerson = require('../controllers/Person/create');
const readPerson = require('../controllers/Person/read');
const updatePerson = require('../controllers/Person/update');
const deletePerson = require('../controllers/Person/delete');
const home = require('../controllers/Person/home');

router
    .route('/')
    .get(home)

router
    .route('/person/create')
    .get(createPerson);
router
    .route('/person/read')
    .get(readPerson);
router
    .route('/person/update/:personid')
    .get(updatePerson);
router
    .route('/person/delete/:personId')
    .get(deletePerson);

module.exports = {router,config};
