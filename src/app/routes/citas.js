const { Router } = require("express");
const router = Router();

const citasController = require("../controllers/citasController");

router.post("/create",citasController.GenerarCita);
router.get("/citasEnEspera/:colegiado",citasController.CitasEnEspera)
router.post("/aceptar",citasController.aceptarSolicitud)
router.post("/rechazar",citasController.denegarSolicitud)

module.exports = router;
