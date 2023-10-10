var DataTypes = require("sequelize").DataTypes;
var _agendas = require("./agendas");
var _ciudades = require("./ciudades");
var _clinicas = require("./clinicas");
var _estados = require("./estados");
var _estados_eventos = require("./estados_eventos");
var _eventos = require("./eventos");
var _facturas = require("./facturas");
var _historiales_clinicos = require("./historiales_clinicos");
var _horarios_disponibles = require("./horarios_disponibles");
var _idiomas = require("./idiomas");
var _mediciones = require("./mediciones");
var _notas = require("./notas");
var _notas_mediciones = require("./notas_mediciones");
var _opciones_mediciones = require("./opciones_mediciones");
var _paises = require("./paises");
var _profesional_especialidades = require("./profesional_especialidades");
var _profesional_idiomas = require("./profesional_idiomas");
var _profesionales = require("./profesionales");
var _tipos_eventos = require("./tipos_eventos");
var _tipos_usuario = require("./tipos_usuario");
var _titulos_profesional = require("./titulos_profesional");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var agendas = _agendas(sequelize, DataTypes);
  var ciudades = _ciudades(sequelize, DataTypes);
  var clinicas = _clinicas(sequelize, DataTypes);
  var estados = _estados(sequelize, DataTypes);
  var estados_eventos = _estados_eventos(sequelize, DataTypes);
  var eventos = _eventos(sequelize, DataTypes);
  var facturas = _facturas(sequelize, DataTypes);
  var historiales_clinicos = _historiales_clinicos(sequelize, DataTypes);
  var horarios_disponibles = _horarios_disponibles(sequelize, DataTypes);
  var idiomas = _idiomas(sequelize, DataTypes);
  var mediciones = _mediciones(sequelize, DataTypes);
  var notas = _notas(sequelize, DataTypes);
  var notas_mediciones = _notas_mediciones(sequelize, DataTypes);
  var opciones_mediciones = _opciones_mediciones(sequelize, DataTypes);
  var paises = _paises(sequelize, DataTypes);
  var profesional_especialidades = _profesional_especialidades(sequelize, DataTypes);
  var profesional_idiomas = _profesional_idiomas(sequelize, DataTypes);
  var profesionales = _profesionales(sequelize, DataTypes);
  var tipos_eventos = _tipos_eventos(sequelize, DataTypes);
  var tipos_usuario = _tipos_usuario(sequelize, DataTypes);
  var titulos_profesional = _titulos_profesional(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  mediciones.belongsToMany(notas, { as: 'idNota_nota', through: notas_mediciones, foreignKey: "idMedicion", otherKey: "idNota" });
  notas.belongsToMany(mediciones, { as: 'idMedicion_mediciones', through: notas_mediciones, foreignKey: "idNota", otherKey: "idMedicion" });
  eventos.belongsTo(agendas, { as: "idAgenda_agenda", foreignKey: "idAgenda"});
  agendas.hasMany(eventos, { as: "eventos", foreignKey: "idAgenda"});
  clinicas.belongsTo(ciudades, { as: "idCiudad_ciudade", foreignKey: "idCiudad"});
  ciudades.hasMany(clinicas, { as: "clinicas", foreignKey: "idCiudad"});
  usuarios.belongsTo(ciudades, { as: "idCiudad_ciudade", foreignKey: "idCiudad"});
  ciudades.hasMany(usuarios, { as: "usuarios", foreignKey: "idCiudad"});
  horarios_disponibles.belongsTo(clinicas, { as: "idClinica_clinica", foreignKey: "idClinica"});
  clinicas.hasMany(horarios_disponibles, { as: "horarios_disponibles", foreignKey: "idClinica"});
  ciudades.belongsTo(estados, { as: "idEstado_estado", foreignKey: "idEstado"});
  estados.hasMany(ciudades, { as: "ciudades", foreignKey: "idEstado"});
  eventos.belongsTo(estados_eventos, { as: "idEstadosEventos_estados_evento", foreignKey: "idEstadosEventos"});
  estados_eventos.hasMany(eventos, { as: "eventos", foreignKey: "idEstadosEventos"});
  facturas.belongsTo(eventos, { as: "idEvento_evento", foreignKey: "idEvento"});
  eventos.hasMany(facturas, { as: "facturas", foreignKey: "idEvento"});
  notas.belongsTo(eventos, { as: "idEvento_evento", foreignKey: "idEvento"});
  eventos.hasMany(notas, { as: "nota", foreignKey: "idEvento"});
  notas.belongsTo(historiales_clinicos, { as: "idHistorialClinico_historiales_clinico", foreignKey: "idHistorialClinico"});
  historiales_clinicos.hasMany(notas, { as: "nota", foreignKey: "idHistorialClinico"});
  profesional_idiomas.belongsTo(idiomas, { as: "idIdioma_idioma", foreignKey: "idIdioma"});
  idiomas.hasOne(profesional_idiomas, { as: "profesional_idioma", foreignKey: "idIdioma"});
  notas_mediciones.belongsTo(mediciones, { as: "idMedicion_medicione", foreignKey: "idMedicion"});
  mediciones.hasMany(notas_mediciones, { as: "notas_mediciones", foreignKey: "idMedicion"});
  opciones_mediciones.belongsTo(mediciones, { as: "idMedicion_medicione", foreignKey: "idMedicion"});
  mediciones.hasMany(opciones_mediciones, { as: "opciones_mediciones", foreignKey: "idMedicion"});
  notas_mediciones.belongsTo(notas, { as: "idNota_nota", foreignKey: "idNota"});
  notas.hasMany(notas_mediciones, { as: "notas_mediciones", foreignKey: "idNota"});
  notas_mediciones.belongsTo(opciones_mediciones, { as: "idOpcionSeleccionada_opciones_medicione", foreignKey: "idOpcionSeleccionada"});
  opciones_mediciones.hasMany(notas_mediciones, { as: "notas_mediciones", foreignKey: "idOpcionSeleccionada"});
  estados.belongsTo(paises, { as: "idPais_paise", foreignKey: "idPais"});
  paises.hasMany(estados, { as: "estados", foreignKey: "idPais"});
  agendas.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(agendas, { as: "agendas", foreignKey: "colegiadoProfesional"});
  clinicas.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(clinicas, { as: "clinicas", foreignKey: "colegiadoProfesional"});
  historiales_clinicos.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(historiales_clinicos, { as: "historiales_clinicos", foreignKey: "colegiadoProfesional"});
  profesional_especialidades.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(profesional_especialidades, { as: "profesional_especialidades", foreignKey: "colegiadoProfesional"});
  profesional_idiomas.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(profesional_idiomas, { as: "profesional_idiomas", foreignKey: "colegiadoProfesional"});
  titulos_profesional.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(titulos_profesional, { as: "titulos_profesionals", foreignKey: "colegiadoProfesional"});
  usuarios.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(usuarios, { as: "usuarios", foreignKey: "colegiadoProfesional"});
  eventos.belongsTo(tipos_eventos, { as: "idTipoEvento_tipos_evento", foreignKey: "idTipoEvento"});
  tipos_eventos.hasMany(eventos, { as: "eventos", foreignKey: "idTipoEvento"});
  usuarios.belongsTo(tipos_usuario, { as: "idTipoUsuario_tipos_usuario", foreignKey: "idTipoUsuario"});
  tipos_usuario.hasMany(usuarios, { as: "usuarios", foreignKey: "idTipoUsuario"});
  eventos.belongsTo(usuarios, { as: "pacienteDni_usuario", foreignKey: "pacienteDni"});
  usuarios.hasMany(eventos, { as: "eventos", foreignKey: "pacienteDni"});
  historiales_clinicos.belongsTo(usuarios, { as: "pacienteDni_usuario", foreignKey: "pacienteDni"});
  usuarios.hasMany(historiales_clinicos, { as: "historiales_clinicos", foreignKey: "pacienteDni"});

  return {
    agendas,
    ciudades,
    clinicas,
    estados,
    estados_eventos,
    eventos,
    facturas,
    historiales_clinicos,
    horarios_disponibles,
    idiomas,
    mediciones,
    notas,
    notas_mediciones,
    opciones_mediciones,
    paises,
    profesional_especialidades,
    profesional_idiomas,
    profesionales,
    tipos_eventos,
    tipos_usuario,
    titulos_profesional,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
