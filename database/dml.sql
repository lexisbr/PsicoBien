USE psicobien;

INSERT INTO paises (nombre, urlBandera, estado, fechaCreacion)
VALUES ('Guatemala', 'https://fontawesome.com/icons/guatemala?style=regular', 1, DATE(utc_timestamp()));

INSERT INTO paises (nombre, urlBandera, estado, fechaCreacion)
VALUES ('Estados Unidos', 'https://fontawesome.com/icons/united-states?style=regular', 1, DATE(utc_timestamp()));

INSERT INTO paises (nombre, urlBandera, estado, fechaCreacion)
VALUES ('México', 'https://fontawesome.com/icons/mexico?style=regular', 1, DATE(utc_timestamp()));

-- INSERT INTO estados (nombre, idpais, estado, fechaCreacion) VALUES ...

-- Ciudad de Guatemala
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Ciudad de Guatemala', 1, 1, UTC_TIMESTAMP());

-- Quetzaltenango
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Quetzaltenango', 1, 1, UTC_TIMESTAMP());

-- Huehuetenango
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Huehuetenango', 1, 1, UTC_TIMESTAMP());

-- San Marcos
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('San Marcos', 1, 1, UTC_TIMESTAMP());

-- Quiché
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Quiché', 1, 1, UTC_TIMESTAMP());

-- Suchitepéquez
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Suchitepéquez', 1, 1, UTC_TIMESTAMP());

-- Escuintla
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Escuintla', 1, 1, UTC_TIMESTAMP());

-- Retalhuleu
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Retalhuleu', 1, 1, UTC_TIMESTAMP());

-- Sololá
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Sololá', 1, 1, UTC_TIMESTAMP());

-- Sacatepéquez
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Sacatepéquez', 1, 1, UTC_TIMESTAMP());

-- Chimaltenango
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Chimaltenango', 1, 1, UTC_TIMESTAMP());

-- Jalapa
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Jalapa', 1, 1, UTC_TIMESTAMP());

-- Chiquimula
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Chiquimula', 1, 1, UTC_TIMESTAMP());

-- Baja Verapaz
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Baja Verapaz', 1, 1, UTC_TIMESTAMP());

-- Alta Verapaz
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Alta Verapaz', 1, 1, UTC_TIMESTAMP());

-- Petén
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Petén', 1, 1, UTC_TIMESTAMP());

-- Izabal
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Izabal', 1, 1, UTC_TIMESTAMP());

-- Zacapa
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Zacapa', 1, 1, UTC_TIMESTAMP());

-- El Progreso
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('El Progreso', 1, 1, UTC_TIMESTAMP());

-- Santa Rosa
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Santa Rosa', 1, 1, UTC_TIMESTAMP());

-- Jutiapa
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Jutiapa', 1, 1, UTC_TIMESTAMP());

-- Jalapa
INSERT INTO estados (nombre, idpais, estado, fechaCreacion)
VALUES ('Jalapa', 1, 1, UTC_TIMESTAMP());

-- .

-- INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion) VALUES ...

-- Ciudad de Guatemala, Departamento de Guatemala
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Ciudad de Guatemala', 1, 1, UTC_TIMESTAMP());

-- Quetzaltenango, Departamento de Quetzaltenango
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Quetzaltenango', 2, 1, UTC_TIMESTAMP());

-- Huehuetenango, Departamento de Huehuetenango
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Huehuetenango', 7, 1, UTC_TIMESTAMP());

-- San Marcos, Departamento de San Marcos
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('San Marcos', 8, 1, UTC_TIMESTAMP());

-- Santa Cruz del Quiché, Departamento de Quiché
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Santa Cruz del Quiché', 9, 1, UTC_TIMESTAMP());

-- Mazatenango, Departamento de Suchitepéquez
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Mazatenango', 10, 1, UTC_TIMESTAMP());

-- Escuintla, Departamento de Escuintla
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Escuintla', 11, 1, UTC_TIMESTAMP());

-- Retalhuleu, Departamento de Retalhuleu
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Retalhuleu', 12, 1, UTC_TIMESTAMP());

-- Sololá, Departamento de Sololá
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Sololá', 13, 1, UTC_TIMESTAMP());

-- Antigua Guatemala, Departamento de Sacatepéquez
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Antigua Guatemala', 10, 1, UTC_TIMESTAMP());

-- Chimaltenango, Departamento de Chimaltenango
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Chimaltenango', 15, 1, UTC_TIMESTAMP());

-- Jalapa, Departamento de Jalapa
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Jalapa', 16, 1, UTC_TIMESTAMP());

-- Chiquimula, Departamento de Chiquimula
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Chiquimula', 17, 1, UTC_TIMESTAMP());

-- Salamá, Departamento de Baja Verapaz
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Salamá', 13, 1, UTC_TIMESTAMP());

-- Cobán, Departamento de Alta Verapaz
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Cobán', 19, 1, UTC_TIMESTAMP());

-- Flores, Departamento de Petén
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Flores', 20, 1, UTC_TIMESTAMP());

-- Puerto Barrios, Departamento de Izabal
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Puerto Barrios', 21, 1, UTC_TIMESTAMP());

-- Zacapa, Departamento de Zacapa
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Zacapa', 22, 1, UTC_TIMESTAMP());

-- Guastatoya, Departamento de El Progreso
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Guastatoya', 23, 1, UTC_TIMESTAMP());

-- Cuilapa, Departamento de Santa Rosa
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Cuilapa', 24, 1, UTC_TIMESTAMP());

-- Jutiapa, Departamento de Jutiapa
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Jutiapa', 25, 1, UTC_TIMESTAMP());

-- Jalapa, Departamento de Jalapa
INSERT INTO ciudades (nombre, idestado, estado, fechaCreacion)
VALUES ('Jalapa', 16, 1, UTC_TIMESTAMP());

-- Puedes continuar agregando más ciudades aquí siguiendo el mismo formato para los demás departamentos.

INSERT INTO tipos_usuario (nombre, estado, fechaCreacion)
VALUES ('Paciente',1,utc_timestamp());

INSERT INTO tipos_usuario (nombre, estado, fechaCreacion)
VALUES ('Profesional',1,utc_timestamp());

INSERT INTO tipos_usuario (nombre, estado, fechaCreacion)
VALUES ('Administrador',1,utc_timestamp());

USE psicobien;
SELECT * FROM paises;
SELECT * FROM estados;
SELECT * FROM ciudades;
SELECT * FROM tipos_usuario;

INSERT INTO usuario (
	dni,
    nombre,
    apellido,
    fechaNacimiento,
    genero,
    telefono,
    email,
    password,
    tipoUsuario,
    idCiudad,
    estado,
    fechaCreacion
)
VALUES (12345678910,"Alejandro","Barrios","2000-05-02", "M", "38164333", "email@mail.com","123","Paciente",1,1,utc_timestamp());

INSERT INTO profesionales (
	colegiado,
    descripcion,
    precioPorHora
) VALUES 
	("22222222","",100),
	("33333333","",100),
    ("44444444","",100),
    ("55555555","",100);

INSERT INTO usuarios (
    dni,
    nombre,
    apellido,
    fechaNacimiento,
    genero,
    telefono,
    email,
    password,
    urlFotoPerfil,
    urlFotoPortada,
    idTipoUsuario,
    colegiadoProfesional,
    idCiudad,
    estado,
    fechaCreacion
)
VALUES (10000002,"Emma","Stone","1990-04-15", "M", "96325412", "emmawatson@gmail.com","234","https://i.pinimg.com/564x/98/94/dd/9894dd4e6cc3f1ff1340b546729b257d.jpg","https://images.hdqwalls.com/download/spider-gwen-4k-art-2020-dk-3840x2160.jpg",2,"22222222",16,1,utc_timestamp()),
    (10000003,"Robert","Downey Jr","1990-04-15", "H", "96325412", "robertdowney@gmail.com","234","https://i.pinimg.com/564x/a2/6f/02/a26f022f95423ba4f4cfcd68b9a5c489.jpg","https://images5.alphacoders.com/403/thumb-1920-403881.jpg",2,"33333333",15,1,utc_timestamp()),
    (10000004,"Elizabeth","Olsen","1990-04-15", "M", "96325412", "elizabetholesen@gmail.com","234","https://i.pinimg.com/564x/20/d0/a4/20d0a49f1d5717e7ec956b9e1d190144.jpg","https://images5.alphacoders.com/489/489836.jpg",2,"44444444",14,1,utc_timestamp()),
    (10000005,"Ester","Esposito","1990-04-15", "M", "96325412", "estersposito@gmail.com","234","https://i.pinimg.com/564x/58/9b/1f/589b1f7715f6ea7ad06e746f7fdf2eb0.jpg","https://i.ytimg.com/vi/2VTwEXF_6zo/maxresdefault.jpg",2,"55555555",15,1,utc_timestamp());

INSERT INTO profesional_especialidades (
	colegiadoProfesional,
    especialidad,
    estado,
    fechaCreacion
) VALUES 
("22222222","Terapia de Pareja",1,utc_timestamp()),
("22222222","Traumas",1,utc_timestamp()),
("33333333","Mindfulness",1,utc_timestamp()),
("33333333","Terapia de Pareja",1,utc_timestamp());

CALL buscarProfesional("",15,"'Mindfulness'");

SELECT 
	dni,
	nombre,
	apellido,
	email,
    u.idCiudad
FROM usuarios u
;


SELECT * FROM psicobien.tipos_usuario;

SELECT * FROM psicobien.usuarios;