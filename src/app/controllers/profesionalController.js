const db = require("../../models");
const Profesionales = db.profesionales;
const Usuarios = db.usuarios;

module.exports = {
  async createProfessionalRequest(req, res) {
    try {
      const { dni, numeroColegiado } = req.body;

      const fotoTitulo = req.file;

      const existingProfessional = await Profesionales.findOne({
        numeroColegiado,
      });
      if (existingProfessional) {
        return res
          .status(400)
          .json({ message: "Numero de colegiado ya utilizado" });
      }

      const professional = new Profesionales({
        fotoTitulo,
        numeroColegiado,
        estado: 2,
      });

      await Usuarios.update(
        { colegiadoProfesional: numeroColegiado },
        { where: { dni } }
      );

      await professional.save();

      return res
        .status(201)
        .json({ message: "Solicitud registrada exitosamente" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  },
  async buscarProfesional(req, res) {
    try {
      const { nombreCompleto, especialidades, idCiudad } = req.body;

      const profesionales = await db.sequelize.query(
        `CALL buscarProfesional("${nombreCompleto.trim()}", ${idCiudad}, "${especialidades}")`
      );
      return res.status(200).json(profesionales);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  },
};
