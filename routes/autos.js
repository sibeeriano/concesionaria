const express =require('express');
const router = express.Router();

const autosController = require ("../controller/autosController");


router.get('/', autosController.autos);
router.get('/:marca',marcasController.marca)

module.exports = router