-- MySQL Script generated by MySQL Workbench
-- Sat Oct  7 19:08:25 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema psicobien
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `psicobien` ;

-- -----------------------------------------------------
-- Schema psicobien
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `psicobien` DEFAULT CHARACTER SET utf8 ;
USE `psicobien` ;

-- -----------------------------------------------------
-- Table `psicobien`.`profesionales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`profesionales` (
  `colegiado` VARCHAR(180) NOT NULL,
  `descripcion` VARCHAR(360) NULL,
  `precioPorHora` DECIMAL NOT NULL,
  UNIQUE INDEX `colegiado_UNIQUE` (`colegiado` ASC) VISIBLE,
  PRIMARY KEY (`colegiado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`profesional_especialidades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`profesional_especialidades` (
  `idProfesionalEspecialidad` INT NOT NULL AUTO_INCREMENT,
  `colegiadoProfesional` VARCHAR(180) NOT NULL,
  `especialidad` VARCHAR(90) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  PRIMARY KEY (`idProfesionalEspecialidad`),
  INDEX `fk_profesional_especialidades_profesionales1_idx` (`colegiadoProfesional` ASC) VISIBLE,
  CONSTRAINT `fk_profesional_especialidades_profesionales1`
    FOREIGN KEY (`colegiadoProfesional`)
    REFERENCES `psicobien`.`profesionales` (`colegiado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`paises`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`paises` (
  `idPais` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `urlBandera` VARCHAR(180) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATETIME NOT NULL,
  `fechaActualizacion` DATETIME NULL,
  PRIMARY KEY (`idPais`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`estados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`estados` (
  `idEstado` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `idPais` INT NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATETIME NOT NULL,
  `fechaActualizacion` DATETIME NULL,
  PRIMARY KEY (`idEstado`),
  INDEX `fk_estado_pais_idx` (`idPais` ASC) VISIBLE,
  CONSTRAINT `fk_estado_pais`
    FOREIGN KEY (`idPais`)
    REFERENCES `psicobien`.`paises` (`idPais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`ciudades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`ciudades` (
  `idCiudad` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `idEstado` INT NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATETIME NOT NULL,
  `fechaActualizacion` DATETIME NULL,
  PRIMARY KEY (`idCiudad`),
  INDEX `fk_ciudad_estado1_idx` (`idEstado` ASC) VISIBLE,
  CONSTRAINT `fk_ciudad_estado1`
    FOREIGN KEY (`idEstado`)
    REFERENCES `psicobien`.`estados` (`idEstado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`clinicas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`clinicas` (
  `idClinica` INT NOT NULL AUTO_INCREMENT,
  `zona` INT NOT NULL,
  `calle` VARCHAR(90) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  `piso` INT NULL,
  `referencias_direccion` VARCHAR(180) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(90) NOT NULL,
  `idCiudad` INT NOT NULL,
  `colegiadoProfesional` VARCHAR(180) NOT NULL,
  `terminosDeAtencion` LONGTEXT NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATETIME NOT NULL,
  `fechaActualizacion` DATETIME NULL,
  PRIMARY KEY (`idClinica`),
  INDEX `fk_clinica_ciudad1_idx` (`idCiudad` ASC) VISIBLE,
  INDEX `fk_clinica_profesionales1_idx` (`colegiadoProfesional` ASC) VISIBLE,
  CONSTRAINT `fk_clinica_ciudad1`
    FOREIGN KEY (`idCiudad`)
    REFERENCES `psicobien`.`ciudades` (`idCiudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_clinica_profesionales1`
    FOREIGN KEY (`colegiadoProfesional`)
    REFERENCES `psicobien`.`profesionales` (`colegiado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`titulos_profesional`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`titulos_profesional` (
  `idTituloProfesional` INT NOT NULL,
  `descripcion` VARCHAR(90) NOT NULL,
  `institucion` VARCHAR(90) NOT NULL,
  `fechaAdquisicion` DATE NOT NULL,
  `colegiadoProfesional` VARCHAR(180) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  PRIMARY KEY (`idTituloProfesional`),
  INDEX `fk_titulo_profesional_profesionales1_idx` (`colegiadoProfesional` ASC) VISIBLE,
  CONSTRAINT `fk_titulo_profesional_profesionales1`
    FOREIGN KEY (`colegiadoProfesional`)
    REFERENCES `psicobien`.`profesionales` (`colegiado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`idiomas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`idiomas` (
  `idIdiomas` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  PRIMARY KEY (`idIdiomas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`profesional_idiomas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`profesional_idiomas` (
  `idIdioma` INT NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  `colegiadoProfesional` VARCHAR(180) NOT NULL,
  PRIMARY KEY (`idIdioma`),
  INDEX `fk_profesional_idiomas_profesionales1_idx` (`colegiadoProfesional` ASC) VISIBLE,
  CONSTRAINT `fk_profesional_idiomas_idiomas1`
    FOREIGN KEY (`idIdioma`)
    REFERENCES `psicobien`.`idiomas` (`idIdiomas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profesional_idiomas_profesionales1`
    FOREIGN KEY (`colegiadoProfesional`)
    REFERENCES `psicobien`.`profesionales` (`colegiado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`estados_eventos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`estados_eventos` (
  `idEstadosEventos` INT NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  PRIMARY KEY (`idEstadosEventos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`agendas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`agendas` (
  `idAgenda` INT NOT NULL,
  `colegiadoProfesional` VARCHAR(180) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  PRIMARY KEY (`idAgenda`),
  INDEX `fk_agenda_profesionales1_idx` (`colegiadoProfesional` ASC) VISIBLE,
  CONSTRAINT `fk_agenda_profesionales1`
    FOREIGN KEY (`colegiadoProfesional`)
    REFERENCES `psicobien`.`profesionales` (`colegiado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`tipos_eventos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`tipos_eventos` (
  `idTiposEventos` INT NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  PRIMARY KEY (`idTiposEventos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`tipos_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`tipos_usuario` (
  `idTipoUsuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(90) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATETIME NOT NULL,
  `fechaActualizacion` DATETIME NULL,
  PRIMARY KEY (`idTipoUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`usuarios` (
  `dni` BIGINT NOT NULL,
  `nombre` VARCHAR(90) NOT NULL,
  `apellido` VARCHAR(90) NOT NULL,
  `fechaNacimiento` DATE NOT NULL,
  `genero` VARCHAR(1) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(300) NOT NULL,
  `urlFotoPerfil` VARCHAR(180) NULL,
  `urlFotoPortada` VARCHAR(180) NULL,
  `direccion` VARCHAR(45) NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATETIME NOT NULL,
  `fechaActualizacion` DATETIME NULL,
  `idCiudad` INT NOT NULL,
  `colegiadoProfesional` VARCHAR(180) NULL,
  `idTipoUsuario` INT NOT NULL,
  PRIMARY KEY (`dni`),
  INDEX `fk_usuario_ciudad1_idx` (`idCiudad` ASC) VISIBLE,
  INDEX `fk_usuario_profesionales1_idx` (`colegiadoProfesional` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_usuario_tipo_usuario1_idx` (`idTipoUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_ciudad1`
    FOREIGN KEY (`idCiudad`)
    REFERENCES `psicobien`.`ciudades` (`idCiudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_profesionales1`
    FOREIGN KEY (`colegiadoProfesional`)
    REFERENCES `psicobien`.`profesionales` (`colegiado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_tipo_usuario1`
    FOREIGN KEY (`idTipoUsuario`)
    REFERENCES `psicobien`.`tipos_usuario` (`idTipoUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`eventos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`eventos` (
  `idEvento` BIGINT NOT NULL,
  `descripcion` VARCHAR(250) NOT NULL,
  `horaInicial` TIME NOT NULL,
  `horaFinal` TIME NOT NULL,
  `fechaEvento` DATE NOT NULL,
  `idEstadosEventos` INT NOT NULL,
  `idAgenda` INT NOT NULL,
  `idTipoEvento` INT NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  `pacienteDni` BIGINT NULL,
  PRIMARY KEY (`idEvento`),
  INDEX `fk_eventos_estados_eventos1_idx` (`idEstadosEventos` ASC) VISIBLE,
  INDEX `fk_eventos_agenda1_idx` (`idAgenda` ASC) VISIBLE,
  INDEX `fk_eventos_tipos_eventos1_idx` (`idTipoEvento` ASC) VISIBLE,
  INDEX `fk_evento_usuario1_idx` (`pacienteDni` ASC) VISIBLE,
  CONSTRAINT `fk_eventos_estados_eventos1`
    FOREIGN KEY (`idEstadosEventos`)
    REFERENCES `psicobien`.`estados_eventos` (`idEstadosEventos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_eventos_agenda1`
    FOREIGN KEY (`idAgenda`)
    REFERENCES `psicobien`.`agendas` (`idAgenda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_eventos_tipos_eventos1`
    FOREIGN KEY (`idTipoEvento`)
    REFERENCES `psicobien`.`tipos_eventos` (`idTiposEventos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_evento_usuario1`
    FOREIGN KEY (`pacienteDni`)
    REFERENCES `psicobien`.`usuarios` (`dni`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`horarios_disponibles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`horarios_disponibles` (
  `idHorariosDisponibles` INT NOT NULL,
  `horarioInicial` TIME NOT NULL,
  `horarioFin` TIME NOT NULL,
  `idClinica` INT NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  PRIMARY KEY (`idHorariosDisponibles`),
  INDEX `fk_horarios_disponibles_clinica1_idx` (`idClinica` ASC) VISIBLE,
  CONSTRAINT `fk_horarios_disponibles_clinica1`
    FOREIGN KEY (`idClinica`)
    REFERENCES `psicobien`.`clinicas` (`idClinica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`historiales_clinicos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`historiales_clinicos` (
  `idHistorialClinico` INT NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  `pacienteDni` BIGINT NOT NULL,
  `colegiadoProfesional` VARCHAR(180) NOT NULL,
  PRIMARY KEY (`idHistorialClinico`),
  INDEX `fk_historial_clinico_usuario1_idx` (`pacienteDni` ASC) VISIBLE,
  INDEX `fk_historial_clinico_profesionales1_idx` (`colegiadoProfesional` ASC) VISIBLE,
  CONSTRAINT `fk_historial_clinico_usuario1`
    FOREIGN KEY (`pacienteDni`)
    REFERENCES `psicobien`.`usuarios` (`dni`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_historial_clinico_profesionales1`
    FOREIGN KEY (`colegiadoProfesional`)
    REFERENCES `psicobien`.`profesionales` (`colegiado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`notas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`notas` (
  `idNota` INT NOT NULL AUTO_INCREMENT,
  `contenido` LONGTEXT NOT NULL,
  `idHistorialClinico` INT NOT NULL,
  `idEvento` BIGINT NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  PRIMARY KEY (`idNota`),
  INDEX `fk_notas_historial_clinico1_idx` (`idHistorialClinico` ASC) VISIBLE,
  INDEX `fk_notas_eventos1_idx` (`idEvento` ASC) VISIBLE,
  CONSTRAINT `fk_notas_historial_clinico1`
    FOREIGN KEY (`idHistorialClinico`)
    REFERENCES `psicobien`.`historiales_clinicos` (`idHistorialClinico`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_notas_eventos1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `psicobien`.`eventos` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`mediciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`mediciones` (
  `idMedicion` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(90) NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  PRIMARY KEY (`idMedicion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`opciones_mediciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`opciones_mediciones` (
  `idOpcionesMediciones` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `idMedicion` INT NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  PRIMARY KEY (`idOpcionesMediciones`),
  INDEX `fk_opciones_mediciones_mediciones1_idx` (`idMedicion` ASC) VISIBLE,
  CONSTRAINT `fk_opciones_mediciones_mediciones1`
    FOREIGN KEY (`idMedicion`)
    REFERENCES `psicobien`.`mediciones` (`idMedicion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`notas_mediciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`notas_mediciones` (
  `idNota` INT NOT NULL,
  `idMedicion` INT NOT NULL,
  `idOpcionSeleccionada` INT NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  PRIMARY KEY (`idNota`, `idMedicion`),
  INDEX `fk_notas_mediciones_mediciones1_idx` (`idMedicion` ASC) VISIBLE,
  INDEX `fk_notas_mediciones_opciones_mediciones1_idx` (`idOpcionSeleccionada` ASC) VISIBLE,
  CONSTRAINT `fk_notas_mediciones_notas1`
    FOREIGN KEY (`idNota`)
    REFERENCES `psicobien`.`notas` (`idNota`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_notas_mediciones_mediciones1`
    FOREIGN KEY (`idMedicion`)
    REFERENCES `psicobien`.`mediciones` (`idMedicion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_notas_mediciones_opciones_mediciones1`
    FOREIGN KEY (`idOpcionSeleccionada`)
    REFERENCES `psicobien`.`opciones_mediciones` (`idOpcionesMediciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `psicobien`.`facturas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `psicobien`.`facturas` (
  `idfactura` INT NOT NULL AUTO_INCREMENT,
  `monto` DECIMAL NOT NULL,
  `estado` TINYINT(1) NOT NULL,
  `fechaCreacion` DATE NOT NULL,
  `fechaActualizacion` DATE NULL,
  `idEvento` BIGINT NOT NULL,
  PRIMARY KEY (`idfactura`),
  INDEX `fk_factura_evento1_idx` (`idEvento` ASC) VISIBLE,
  CONSTRAINT `fk_factura_evento1`
    FOREIGN KEY (`idEvento`)
    REFERENCES `psicobien`.`eventos` (`idEvento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
