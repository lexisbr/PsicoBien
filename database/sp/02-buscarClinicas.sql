CREATE PROCEDURE `buscarClinicas`(
	colegiado varchar(50)
)
BEGIN
select clinicas.idClinica,clinicas.zona, clinicas.calle, clinicas.numero, clinicas.piso, clinicas.referencias_direccion, clinicas.telefono, clinicas.nombre,clinicas.terminosDeAtencion, ciudades.nombre as ciudad, estados.nombre as estado from usuarios
inner join clinicas on clinicas.colegiadoProfesional = usuarios.colegiadoProfesional 
inner join ciudades on ciudades.idCiudad = clinicas.idCiudad 
inner join estados on estados.idEstado = ciudades.Estado where usuarios.colegiadoProfesional = colegiado;
END