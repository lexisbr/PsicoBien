CREATE PROCEDURE `verDatosProfesional`(
	colegiado varchar(50)
)
BEGIN
select usuarios.nombre, profesionales.descripcion, profesionales.precioPorHora from usuarios
inner join profesionales on profesionales.colegiado = usuarios.colegiadoProfesional where usuarios.colegiadoProfesional = colegiado;
END
