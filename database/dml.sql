USE psicobien;

INSERT INTO pais (nombre, urlBandera, estado, fechaCreacion)
VALUES ('Guatemala', 'https://fontawesome.com/icons/guatemala?style=regular', 1, DATE(utc_timestamp()));

INSERT INTO pais (nombre, urlBandera, estado, fechaCreacion)
VALUES ('Estados Unidos', 'https://fontawesome.com/icons/united-states?style=regular', 1, DATE(utc_timestamp()));

INSERT INTO pais (nombre, urlBandera, estado, fechaCreacion)
VALUES ('México', 'https://fontawesome.com/icons/mexico?style=regular', 1, DATE(utc_timestamp()));

INSERT INTO estado (nombre, idPais, estado, fechaCreacion)
VALUES ('Ciudad de Guatemala', 1, 1, utc_timestamp());

INSERT INTO estado (nombre, idPais, estado, fechaCreacion)
VALUES ('Quetzaltenango', 1, 1, utc_timestamp());

INSERT INTO estado (nombre, idPais, estado, fechaCreacion)
VALUES ('Totonicapan', 1, 1, utc_timestamp());





SELECT * FROM pais;

INSERT INTO usuario (
	dni,
    nombre,
    apellido,
    fechaNacimiento,
    genero,
    telefono,
    email,
    tipoUsuario,
    estado,
    fechaCreacion
)
VALUES (12345678910,"Alejandro","Barrios","2000-05-02", "M", "38164333", "email@mail.com","Paciente",1,utc_timestamp());