const { Router } = require("express");
const router = Router();

const adminCopntroller = require("../controllers/adminController");

router.get("/solicitudes", adminCopntroller.obtenerEspecialidadesRegistradas);
router.post("/aceptar-solicitud", adminCopntroller.aceptarSolicitud);
router.post("/denegar-solicitud", adminCopntroller.denegarSolicitud);

module.exports = router;
