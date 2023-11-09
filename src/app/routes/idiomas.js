const { Router } = require('express');
const router = Router();

const idiomasController = require('../controllers/idiomasController');

router.get("/find", idiomasController.find);
router.get("/findP/:colegiadoProfesional", idiomasController.findIdiomasP);
router.get("/buscarIdiomas/:dni",idiomasController.buscarIdiomas)
router.delete("/delete/:idProfesionalIdiomas",idiomasController.borrarIdioma)

module.exports = router; 