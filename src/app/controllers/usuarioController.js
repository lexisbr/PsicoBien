"use strict";
const db = require("../../models");
const { Op } = require("sequelize");
const Usuarios = db.usuarios;

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

    async registrar(req, res) {

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
    }
}