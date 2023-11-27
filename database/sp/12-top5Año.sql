CREATE PROCEDURE `top5año`(
	año varchar(50)
)
BEGIN
select concat(usuarios.nombre,' ',usuarios.apellido) as psicologo, usuarios.urlFotoPerfil,profesionales.colegiado, SUM(facturas.monto) as ganancias_al_anio
from profesionales
join agendas on agendas.colegiadoProfesional = profesionales.colegiado
join eventos on eventos.idAgenda = agendas.idAgenda 
join facturas on facturas.idEvento = eventos.idEvento
join usuarios on usuarios.colegiadoProfesional = profesionales.colegiado
where year(eventos.fechaEvento) = año
group by  profesionales.colegiado
order by ganancias_al_anio desc
limit 5;
END