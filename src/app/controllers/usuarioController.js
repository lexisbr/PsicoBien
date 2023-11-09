"use strict";
const db = require("../../models");
const { Op } = require("sequelize");
const profesional_idiomas = require("../../models/profesional_idiomas");
const Usuarios = db.usuarios;
const ProfesionalesIdiomas = db.profesional_idiomas;
module.exports = {

    validateLogin(req, res) {
        Usuarios.findOne({
            where: {
                email: req.body.email
            }
        }).then(usuario => {
            if (!usuario) {
                return res.status(404).send({ message: "Usuario no encontrado" });
            }
            if (usuario.password !== req.body.password) {
                return res.status(401).send({ message: "Contraseña incorrecta" });
            }
            return res.status(200).send(usuario);
        }).catch(err => {
            console.log(err)
            return res.status(500).send({ message: err.message });
        });
    },

    async registrar(req, res)  {
        console.log(req.body);
        const usuario = await Usuarios.findOne({
            where: {
                [Op.or]: [{ email: req.body.email }, { dni: req.body.dni }]
            }
        });

        if (usuario) {
            return res.status(409).send({ message: "El usuario ya existe" });
        }

        Usuarios.create({
            dni: req.body.dni,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            fechaNacimiento: req.body.fechaNacimiento,
            genero: req.body.genero,
            telefono: req.body.telefono,
            password: req.body.password,
            idTipoUsuario: req.body.idTipoUsuario,
            idCiudad: req.body.idCiudad,
            estado: 1,
            fechaCreacion: new Date(),
        }).then(usuario => {
            return res.status(200).send(usuario);
        }).catch(err => {
            console.log(err)
            return res.status(500).send({ message: err.message });
        });
    },
    find(req, res) {
        return Usuarios.findAll()
            .then(usuario => res.status(200).send(usuario))
            .catch(error => res.status(400).send(error))
    },
    findId(req, res) {
        const DNI = req.params.id;
        Usuarios.findByPk(DNI)
            .then(usuario => {
                if (!usuario) {
                    return res.status(404).send({ error: 'Tipo de cliente no encontrado candy manca' });
                } 
                else {
                    return res.status(200).send(usuario);
                }
            })
            .catch(error => res.status(400).send({ error: 'Error al realizar la consulta' }));
    },
    updateFotoPerfil(req, res){
        const update = req.body;
        Usuarios.update({
            urlFotoPerfil: update.urlFotoPerfil
        }), {where: {dni :update.dni}}
        .then(urlPerfil => {
            if (urlPerfil[0] === 0) {
                return res.status(200).send({error: 'No se encontró ningún registro'});
            }
            else{
                return res.status(200).send('El registro ha sido actualizado');
            }
        })
        .catch(error => {
            console.log(error)
            return res.status(500).send({ error: 'Error al actualizar' });
        });
    }
    ,
    async buscarClinicas(req, res){
        try {
            const { colegiado } = req.params;

            const clinicas = await db.sequelize.query(
                `CALL buscarClinicas("${colegiado}")`
            );
            return res.status(200).json(clinicas);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    },
    async buscarEspecialidad(req, res) {
        try {
            const { dni } = req.params;

            const especialidades = await db.sequelize.query(
                `CALL EspecialidadesProfesional("${dni}")`
            );
            return res.status(200).json(especialidades);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    },
    async agregarIdioma(req, res) {
        const idIdioma = req.body.idIdioma;
        const estado = true;
        const fechaCreacion= new Date();
        const fechaFormateada = fechaCreacion.toISOString().split('T')[0];
        const colegiadoProfesional= req.body.colegiadoProfesional;
        try {
            
            const usuarios = await db.sequelize.query(
                `INSERT INTO profesional_idiomas (idIdioma, estado, fechaCreacion, colegiadoProfesional) values ( ${idIdioma}, ${estado}, ${fechaFormateada}, ${colegiadoProfesional})`,
                {
                    replacements: [idIdioma, colegiadoProfesional],
                    type: db.Sequelize.QueryTypes.INSERT,
                }
            );

            await res.status(200).json({idIdioma,colegiadoProfesional})

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' }); 
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
    },
    async agregarEspecialidad(req, res) {
        const especialidad = req.body.especialidad;
        const estado = true;
        const fechaCreacion= new Date();
        const fechaFormateada = fechaCreacion.toISOString().split('T')[0];
        const colegiadoProfesional= req.body.colegiadoProfesional;
        try {
            
            const usuarios = await db.sequelize.query(
                `INSERT INTO profesional_especialidades (colegiadoProfesional, especialidad, estado, fechaCreacion) values ( ?,?, ${estado}, ${fechaFormateada})`,
                {
                    replacements: [ colegiadoProfesional,especialidad],
                    type: db.Sequelize.QueryTypes.INSERT,
                }
            );

            await res.status(200).json({colegiadoProfesional})

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' }); 
        }
    },
    async borrarEspecialidad(req, res) {
        try {
            const { idProfesionalEspecialidad } = req.params;

            const usuarios = await db.sequelize.query(
                'DELETE FROM profesional_especialidades WHERE idProfesionalEspecialidad = ?',
                {
                    replacements: [idProfesionalEspecialidad],
                    type: db.Sequelize.QueryTypes.UPDATE,
                }
            );
            return res.status(200).json(usuarios);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    },
    async borrarClinica(req, res) {
        try {
            const { idClinica } = req.params;

            const usuarios = await db.sequelize.query(
                'DELETE FROM clinicas WHERE idClinica = ?',
                {
                    replacements: [idClinica],
                    type: db.Sequelize.QueryTypes.UPDATE,
                }
            );
            return res.status(200).json(usuarios);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    },

}