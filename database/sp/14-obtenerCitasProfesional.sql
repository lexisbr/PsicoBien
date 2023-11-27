CREATE PROCEDURE `obtenerCitasProfesional`(
	colegiado varchar(50)
)
BEGIN
	select  eventos.descripcion as title, estados_eventos.descripcion as description, estados_eventos.color,concat(eventos.fechaEvento,'T',eventos.horaInicial) as start, concat(eventos.fechaEvento,'T',eventos.horaFinal) as end from usuarios 
	inner join profesionales on profesionales.colegiado = usuarios.colegiadoProfesional
	inner join agendas on agendas.colegiadoProfesional = profesionales.colegiado
	inner join eventos on eventos.idAgenda = agendas.idAgenda
	inner join estados_eventos on estados_eventos.idEstadosEventos = eventos.idEstadosEventos
	where usuarios.colegiadoProfesional = colegiado;
END