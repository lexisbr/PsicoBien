const { Router } = require('express');
const router = Router();

const ubicacionesController = require('../controllers/ubicacionesController');

router.get("/paises", ubicacionesController.getCountries);
router.get("/estados/:idPais", ubicacionesController.getStates);
router.get("/ciudades/:idEstado", ubicacionesController.getCities);

module.exports = router;