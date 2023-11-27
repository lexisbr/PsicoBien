CREATE PROCEDURE `psicobien`.`buscarProfesional`(
	nombreCompleto VARCHAR(180),
    idEstado INT,
    especialidades TEXT
)
BEGIN
	CREATE TEMPORARY TABLE IF NOT EXISTS usuariosTmp (
		dni INT, 
		nombre VARCHAR(90),
		apellido VARCHAR(90),
		email VARCHAR(45),
        urlFotoPerfil VARCHAR(180),
        especialidades TEXT
    );
    
    SET @whereString = "";
    SET @whereEspecialidades = "";
    SET @whereNombre = "";
    SET @whereEstado = "";
    
    IF(especialidades != "") THEN
		SET @whereString = "WHERE ";
		SET @whereEspecialidades = CONCAT("pe.especialidad IN (",especialidades,")");
    END IF;
    
    IF(nombreCompleto != "") THEN
		SET @whereString = "WHERE ";
		SET @stringAnd = "";
		IF(@whereEspecialidades != "") THEN
			SET @stringAnd = "AND";
        END IF;
		SET @whereNombre = CONCAT(@stringAnd," CONCAT(u.nombre,' ',u.apellido) LIKE '%",nombreCompleto,"%'");
    END IF;
    
    IF(idEstado IS NOT NULL) THEN
		SET @whereString = "WHERE ";
		SET @stringAnd = "";
		IF(@whereEspecialidades != "" OR @whereNombre != "") THEN
			SET @stringAnd = "AND";
        END IF;
		SET @whereEstado = CONCAT(@stringAnd," c.idEstado = ",idEstado);
	END IF;
    

    
    SET @queryString = CONCAT("
		INSERT INTO usuariosTmp
		SELECT 
			DISTINCT u.dni,
            u.nombre,
            u.apellido,
            u.email,
            u.urlFotoPerfil,
            obtenerEspecialidadesProfesional(u.dni)
		FROM  usuarios u
        INNER JOIN profesional_especialidades pe ON pe.colegiadoProfesional = u.colegiadoProfesional
        INNER JOIN ciudades c ON c.idCiudad = u.idCiudad ",
		@whereString,
        @whereEspecialidades,
		@whereNombre,
        @whereEstado,
        " GROUP BY u.dni"
        );

    PREPARE stmt FROM @queryString;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
		
	
	SELECT * FROM usuariosTmp;
    DROP TEMPORARY TABLE IF EXISTS usuariosTmp;
END