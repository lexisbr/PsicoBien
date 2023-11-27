CREATE PROCEDURE `IdiomasProfesional`(
dniUser varchar(50)
)
BEGIN
select idiomas.idIdiomas,profesional_idiomas.idProfesionalIdiomas,  idiomas.nombre from usuarios
inner join profesional_idiomas on profesional_idiomas.colegiadoProfesional = usuarios.colegiadoProfesional
inner join idiomas on idiomas.idIdiomas = profesional_idiomas.idIdioma where usuarios.dni = dniUser;  
END
