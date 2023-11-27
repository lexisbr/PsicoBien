const sequelize = require("sequelize");
const db = require("../../models");
const Profesionales = db.profesionales;
const Agendas = db.agendas;
const Eventos = db.eventos;
const Facturas = db.facturas;
module.exports = {

    async GenerarCita(req, res) {
        const { colegiadoProfesional, descripcion, horaInicial, horaFinal, fechaEvento, pacienteDni } = req.body;
        console.log(req.body)
        try {
            const agendas = await Agendas.findAll(
                {
                    where: {
                        colegiadoProfesional: colegiadoProfesional
                    }
                });
            const tmp = agendas.map(agenda => agenda.idAgenda);
            const idAgenda = tmp[0];
            datos_evento = {
                descripcion: descripcion,
                horaInicial: horaInicial,
                horaFinal: horaFinal,
                fechaEvento: fechaEvento,
                idEstadosEventos: 3,
                idAgenda: idAgenda,
                idTipoEvento: 1,
                estado: 1,
                fechaCreacion: new Date(),
                pacienteDni: pacienteDni
            };
            console.log("Estos son los datos de datos_evento ", datos_evento)
            Eventos.create(datos_evento)
                .then(evento => {
                    //res.send(evento);
                    Profesionales.findByPk(colegiadoProfesional)
                        .then(profesional => {
                            if (!profesional) {
                                return res.status(404).json({ error: 'Psicologo no encontrado' });
                            }
                            console.log(profesional)
                            datos_fectura = {
                                monto: profesional.precioPorHora,
                                estado: 1,
                                fechaCreacion: new Date(),
                                idEvento: evento.idEvento
                            }
                            Facturas.create(datos_fectura)
                                .then((factura) => {
                                    res.status(201).json({
                                        evento: evento,
                                        factura: factura
                                    });
                                })
                                .catch((error) => {
                                    console.log(error)
                                    return res.status(500).json({ error: 'Error al insertar' });
                                })

                        })
                        .catch(error => {
                            console.log(error)
                            return res.status(500).json({ error: 'Error al insertar' });
                        })
                })
                .catch(error => {
                    console.log(error)
                    return res.status(500).json({ error: 'Error al insertar' });
                });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error Agenda' });
        }
    },

    async CitasEnEspera(req, res) {
        const { colegiado } = req.params;
        try {
            const citas = await db.sequelize.query(
                `CALL citasEnEspera(${colegiado})`
            );
            return res.status(200).json(citas);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error });
        }
    },
    async aceptarSolicitud(req, res) {
        try {
            const { idEvento } = req.body;
            console.log(idEvento);
            const idEstadosEventos = 1;
            const result = Eventos.update({ idEstadosEventos }, { where: { idEvento } });
            console.log(result)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: "Server error" });
        }
    },
    async denegarSolicitud(req, res) {
        try {
          const { idEvento } = req.body;
          const idEstadosEventos = 2;
          const result = Eventos.update({ idEstadosEventos }, { where: { idEvento } });
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json({ message: "Server error" });
        }
      },
}

