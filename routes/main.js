//el controllador se tiene que llamar igual que la ruta

const express = require('express')
const router = express.Router();
const main  = require('../controllers/main')

router.get("/",main.index)

module.exports = router;