CREATE FUNCTION `obtenerEspecialidadesProfesional`(dniProfesional BIGINT
) RETURNS text CHARSET utf8 COLLATE utf8_general_ci
    DETERMINISTIC
BEGIN
	DECLARE especialidades TEXT DEFAULT "";
    
    SELECT GROUP_CONCAT(pe.especialidad SEPARATOR ',') INTO especialidades 
	FROM  usuarios u
	INNER JOIN profesional_especialidades pe ON pe.colegiadoProfesional = u.colegiadoProfesional
    WHERE u.dni = dniProfesional
	GROUP BY dni;
RETURN especialidades;
END