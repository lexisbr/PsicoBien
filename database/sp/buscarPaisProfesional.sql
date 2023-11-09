CREATE PROCEDURE `buscarPaisProfesional`(
	dni varchar(50)
)
BEGIN
select paises.idPais, paises.nombre, paises.urlBandera from usuarios
inner join ciudades on ciudades.idCiudad = usuarios.idCiudad
inner join estados on estados.idEstado = ciudades.idEstado
inner join paises on paises.idPais = estados.idPais where usuarios.dni = dni;
END