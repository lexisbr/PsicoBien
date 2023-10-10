const { Router } = require('express');
const router = Router();

const usuarioController = require('../controllers/usuarioController');

router.post("/login", usuarioController.validateLogin);
router.post("/registrar", usuarioController.registrar);

module.exports = router;