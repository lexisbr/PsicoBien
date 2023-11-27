CREATE PROCEDURE `obtenerCitasPaciente`(
	dni varchar(50)
)
BEGIN
	 select eventos.idEvento, eventos.descripcion as title, estados_eventos.descripcion as description, estados_eventos.color, concat(eventos.fechaEvento,'T',eventos.horaInicial) as start, concat(eventos.fechaEvento,'T',eventos.horaFinal) as end from usuarios
	 inner join eventos on eventos.pacienteDni = usuarios.dni
	 inner join estados_eventos on estados_eventos.idEstadosEventos = eventos.idEstadosEventos
	 where usuarios.dni = dni and usuarios.idTipoUsuario = 1;
END