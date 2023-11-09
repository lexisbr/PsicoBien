const db = require("../../models");
const Idiomas = db.idiomas;
const IdimoasProfesionales = db.profesional_idiomas;
const Sequelize = ('sequelize')

module.exports = {
    async find(req, res) {
        try {
            const idiomas = await Idiomas.findAll();
            res.status(200).json(idiomas);
        } catch (error) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    },
    async findIdiomasP(req, res) {
        const { colegiadoProfesional } = req.params;
        try {
            const iprofesionales = await IdimoasProfesionales.findAll(
                {
                });
            res.status(200).json(iprofesionales)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },
    async buscarIdiomas(req, res) {
        try {
            const { dni } = req.params;

            const profesionales = await db.sequelize.query(
                `CALL IdiomasProfesional("${dni}")`
            );
            return res.status(200).json(profesionales);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    },
    async borrarIdioma(req, res) {
        try {
            const { idProfesionalIdiomas } = req.params;

            const usuarios = await db.sequelize.query(
                'DELETE FROM profesional_idiomas WHERE idProfesionalIdiomas = ? ',
                {
                    replacements: [idProfesionalIdiomas],
                    type: db.Sequelize.QueryTypes.UPDATE,
                }
            );
            return res.status(200).json(usuarios);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    }
}