CREATE PROCEDURE `clienteConMasCitas`(
	limite int
)
BEGIN
select usuarios.dni, CONCAT(usuarios.nombre, ' ', usuarios.apellido) AS paciente, COUNT(*) AS total_citas
from usuarios
join eventos on eventos.pacienteDni = usuarios.dni
group by usuarios.dni
order by total_citas desc
limit limite;
END