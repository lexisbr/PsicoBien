"use strict";
const db = require("../../models");
const Profesionales = db.profesionales;

module.exports = {
  async obtenerEspecialidadesRegistradas(req, res) {
    try {
      const solicitudes = await db.sequelize.query(
        `CALL obtenerSolicitudesRegistro()`
      );

      return res.status(200).json(solicitudes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  },
  async aceptarSolicitud(req, res) {
    try {
      const { colegiado } = req.body;
      console.log(colegiado);
      const estado = 1;
      const result = Profesionales.update({ estado }, { where: { colegiado } });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: "Server error" });
    }
  },
  async denegarSolicitud(req, res) {
    try {
      const { colegiado } = req.body;
      const estado = 0;
      const result = Profesionales.update({ estado }, { where: { colegiado } });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: "Server error" });
    }
  },
};
