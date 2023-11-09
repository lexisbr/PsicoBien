const { Router } = require('express');
const router = Router();

const usuarioController = require('../controllers/usuarioController');

router.post("/login", usuarioController.validateLogin);
router.post("/registrar", usuarioController.registrar);
router.get("/users",usuarioController.find)
router.get("/users/:id",usuarioController.findId);
router.get("/userEspecialidad/:dni",usuarioController.buscarEspecialidad);
router.post("/agregarIdioma",usuarioController.agregarIdioma);
router.delete("/deleteIdioma/:idProfesionalIdiomas",usuarioController.borrarIdioma)

router.post("/agregarEspecialidad",usuarioController.agregarEspecialidad);
router.delete("/deleteEspecialidad/:idProfesionalEspecialidad",usuarioController.borrarEspecialidad)
module.exports = router; 