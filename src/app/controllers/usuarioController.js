"use strict";
const db = require("../../models");
const { Op } = require("sequelize");
const Usuarios = db.usuarios;

module.exports = {

    validateLogin(req, res){
        Usuarios.findOne({
            where: {
                email: req.body.email
            }
        }).then(usuario => {
            if(!usuario){
                return res.status(404).send({message: "Usuario no encontrado"});
            }
            if(usuario.password !== req.body.password){
                return res.status(401).send({message: "Contraseña incorrecta"});
            }
            return res.status(200).send(usuario);
        }).catch(err => {
            return res.status(500).send({message: err.message});
        });
    },

    async registrar(req, res)  {
        console.log(req.body);
        const usuario = await Usuarios.findOne({
            where: {
               [Op.or]: [{email: req.body.email}, {dni: req.body.dni}]
            }
        });

        if(usuario){
            return res.status(409).send({message: "El usuario ya existe"});
        }

        Usuarios.create({
            dni: req.body.dni,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fechaNacimiento: req.body.fechaNacimiento,
            genero: req.body.genero,
            telefono: req.body.telefono,
            email: req.body.email,
            password: req.body.password,
            idTipoUsuario: req.body.idTipoUsuario,
            idCiudad: req.body.idCiudad,
            estado: 1,
            fechaCreacion: new Date(),
        }).then(usuario => {
            return res.status(200).send(usuario);
        }).catch(err => {
            return res.status(500).send({message: err.message});
        });
    }
}