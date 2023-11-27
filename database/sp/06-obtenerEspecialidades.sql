CREATE PROCEDURE `psicobien`.`obtenerEspecialidades`()
BEGIN
	SELECT especialidad
    FROM profesional_especialidades
    GROUP BY LOWER(especialidad);
END