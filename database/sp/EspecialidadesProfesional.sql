CREATE PROCEDURE `EspecialidadesProfesional`(
dniUser varchar(50)
)
BEGIN
select  profesional_especialidades.idProfesionalEspecialidad,profesional_especialidades.especialidad from usuarios
inner join profesional_especialidades on profesional_especialidades.colegiadoProfesional = usuarios.colegiadoProfesional where usuarios.dni = dniUser;
END
