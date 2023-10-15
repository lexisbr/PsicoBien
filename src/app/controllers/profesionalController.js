const db = require("../../models");
const Profesionales = db.profesionales;
const Usuarios = db.usuarios;

exports.createProfessionalRequest = async (req, res) => {
  try {
    const { dni, numeroColegiado } = req.body;

    const fotoTitulo = req.file;

    const existingProfessional = await Profesionales.findOne({
      numeroColegiado,
    });
    if (existingProfessional) {
      return res
        .status(400)
        .json({ message: "Número de colegiado ya utilizado" });
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
};
