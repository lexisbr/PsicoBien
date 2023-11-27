CREATE PROCEDURE `citasEnEspera`(
	colegiado varchar(50)
)
BEGIN
	select  eventos.idEvento,eventos.descripcion as title, u2.nombre, u2.apellido,u2.email, u2.dni, estados_eventos.descripcion as description, estados_eventos.color,eventos.horaInicial,eventos.horaFinal , eventos.fechaEvento from usuarios u1
	inner join profesionales on profesionales.colegiado = u1.colegiadoProfesional
	inner join agendas on agendas.colegiadoProfesional = profesionales.colegiado
	inner join eventos on eventos.idAgenda = agendas.idAgenda
	inner join estados_eventos on estados_eventos.idEstadosEventos = eventos.idEstadosEventos
    inner join usuarios u2 on u2.dni = eventos.pacienteDni
	where u1.colegiadoProfesional = colegiado and estados_eventos.idEstadosEventos = 3;
END