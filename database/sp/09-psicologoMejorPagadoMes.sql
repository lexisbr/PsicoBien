CREATE PROCEDURE `psicologoMejorPagadoMes`(
	mes varchar(50)
)
BEGIN
select concat(usuarios.nombre,' ',usuarios.apellido) as psicologo, usuarios.urlFotoPerfil,profesionales.colegiado, SUM(facturas.monto) as ganancias_al_mes
from profesionales
join agendas on agendas.colegiadoProfesional = profesionales.colegiado
join eventos on eventos.idAgenda = agendas.idAgenda 
join facturas on facturas.idEvento = eventos.idEvento
join usuarios on usuarios.colegiadoProfesional = profesionales.colegiado
where month(eventos.fechaEvento) = mes
group by  profesionales.colegiado
order by ganancias_al_mes desc
limit 1;
END