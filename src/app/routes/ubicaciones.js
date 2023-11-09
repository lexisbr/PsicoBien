const { Router } = require('express');
const router = Router();

const ubicacionesController = require('../controllers/ubicacionesController');

router.post("/paises", ubicacionesController.getCountries);
router.get("/paises1/:dni", ubicacionesController.getCountriesId);
router.get("/paises/:dni",ubicacionesController.buscarPais);
router.get("/estados/:idPais", ubicacionesController.getStates);
router.get("/ciudades/:idEstado", ubicacionesController.getCities);

module.exports = router; 