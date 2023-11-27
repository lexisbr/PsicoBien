CREATE PROCEDURE `obtenerSolicitudesRegistro`()
begin
	select u.nombre , u.apellido , u.email , p.colegiado ,p.fotoTitulo  from usuarios u
	inner join profesionales p on p.colegiado = u.colegiadoProfesional 
	where p.estado =2;
END