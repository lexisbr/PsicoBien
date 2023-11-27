const express = require("express");
const multer = require("multer");
const path = require('path');
const router = express.Router();
const profesionalController = require("../controllers/profesionalController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Directorio donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + extname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/jpeg", "image/png"]; // Tipos de archivo permitidos
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true); // Aceptar el archivo
  } else {
    cb(new Error("Tipo de archivo no permitido"), false); // Rechazar el archivo
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});




router.get(
  "/especialidades",
  profesionalController.obtenerEspecialidadesRegistradas
);

router.get("/",profesionalController.find)
router.get("/find1",profesionalController.find2)

router.post("/registrar-solicitud",upload.single("file"),profesionalController.createProfessionalRequest);
router.post('/portada', upload.single("file"),profesionalController.actualizarPortada)
router.post('/perfil', upload.single("file"),profesionalController.actualizarPerfil)

router.post("/buscar", profesionalController.buscarProfesional);

router.get("/:colegiado",profesionalController.findData);
router.get("/datosProfesionales/:colegiado",profesionalController.datosProfesional);

router.get("/pagadoMes/:mes",profesionalController.obtenerProfesionalMejorPagadoMes);
router.get("/pagadoAnio/:anio",profesionalController.obtenerProfesionalMejorPagadoAnio);
router.get("/pagadoAnioTop/:anio",profesionalController.obtenerProfesionalTopMejorPagadoAnio);
router.get("/pagadoMesTop/:mes",profesionalController.obtenerProfesionalTopMejorPagadoMes);

router.get("/clientestop/:limit",profesionalController.obtenerClientesTop);
router.get("/citasP/:colegiado",profesionalController.obtenerCitasP);
module.exports = router;
