var DataTypes = require("sequelize").DataTypes;
var _agenda = require("./agenda");
var _ciudad = require("./ciudad");
var _clinica = require("./clinica");
var _especialidades = require("./especialidades");
var _estado = require("./estado");
var _estados_eventos = require("./estados_eventos");
var _evento = require("./evento");
var _factura = require("./factura");
var _historial_clinico = require("./historial_clinico");
var _horarios_disponibles = require("./horarios_disponibles");
var _idiomas = require("./idiomas");
var _mediciones = require("./mediciones");
var _mensaje = require("./mensaje");
var _notas = require("./notas");
var _notas_mediciones = require("./notas_mediciones");
var _opciones_mediciones = require("./opciones_mediciones");
var _pais = require("./pais");
var _profesional_especialidades = require("./profesional_especialidades");
var _profesional_idiomas = require("./profesional_idiomas");
var _profesionales = require("./profesionales");
var _tipos_eventos = require("./tipos_eventos");
var _titulo_profesional = require("./titulo_profesional");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var agenda = _agenda(sequelize, DataTypes);
  var ciudad = _ciudad(sequelize, DataTypes);
  var clinica = _clinica(sequelize, DataTypes);
  var especialidades = _especialidades(sequelize, DataTypes);
  var estado = _estado(sequelize, DataTypes);
  var estados_eventos = _estados_eventos(sequelize, DataTypes);
  var evento = _evento(sequelize, DataTypes);
  var factura = _factura(sequelize, DataTypes);
  var historial_clinico = _historial_clinico(sequelize, DataTypes);
  var horarios_disponibles = _horarios_disponibles(sequelize, DataTypes);
  var idiomas = _idiomas(sequelize, DataTypes);
  var mediciones = _mediciones(sequelize, DataTypes);
  var mensaje = _mensaje(sequelize, DataTypes);
  var notas = _notas(sequelize, DataTypes);
  var notas_mediciones = _notas_mediciones(sequelize, DataTypes);
  var opciones_mediciones = _opciones_mediciones(sequelize, DataTypes);
  var pais = _pais(sequelize, DataTypes);
  var profesional_especialidades = _profesional_especialidades(sequelize, DataTypes);
  var profesional_idiomas = _profesional_idiomas(sequelize, DataTypes);
  var profesionales = _profesionales(sequelize, DataTypes);
  var tipos_eventos = _tipos_eventos(sequelize, DataTypes);
  var titulo_profesional = _titulo_profesional(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  especialidades.belongsToMany(profesionales, { as: 'colegiadoProfesional_profesionales', through: profesional_especialidades, foreignKey: "idEspecialidad", otherKey: "colegiadoProfesional" });
  mediciones.belongsToMany(notas, { as: 'idNota_nota', through: notas_mediciones, foreignKey: "idMedicion", otherKey: "idNota" });
  notas.belongsToMany(mediciones, { as: 'idMedicion_mediciones', through: notas_mediciones, foreignKey: "idNota", otherKey: "idMedicion" });
  profesionales.belongsToMany(especialidades, { as: 'idEspecialidad_especialidades', through: profesional_especialidades, foreignKey: "colegiadoProfesional", otherKey: "idEspecialidad" });
  usuario.belongsToMany(usuario, { as: 'dniUsuarioReceptor_usuarios', through: mensaje, foreignKey: "dniUsuarioRemitente", otherKey: "dniUsuarioReceptor" });
  usuario.belongsToMany(usuario, { as: 'dniUsuarioRemitente_usuarios', through: mensaje, foreignKey: "dniUsuarioReceptor", otherKey: "dniUsuarioRemitente" });
  evento.belongsTo(agenda, { as: "idAgenda_agenda", foreignKey: "idAgenda"});
  agenda.hasMany(evento, { as: "eventos", foreignKey: "idAgenda"});
  clinica.belongsTo(ciudad, { as: "idCiudad_ciudad", foreignKey: "idCiudad"});
  ciudad.hasMany(clinica, { as: "clinicas", foreignKey: "idCiudad"});
  usuario.belongsTo(ciudad, { as: "idCiudad_ciudad", foreignKey: "idCiudad"});
  ciudad.hasMany(usuario, { as: "usuarios", foreignKey: "idCiudad"});
  horarios_disponibles.belongsTo(clinica, { as: "idClinica_clinica", foreignKey: "idClinica"});
  clinica.hasMany(horarios_disponibles, { as: "horarios_disponibles", foreignKey: "idClinica"});
  profesional_especialidades.belongsTo(especialidades, { as: "idEspecialidad_especialidade", foreignKey: "idEspecialidad"});
  especialidades.hasMany(profesional_especialidades, { as: "profesional_especialidades", foreignKey: "idEspecialidad"});
  ciudad.belongsTo(estado, { as: "idEstado_estado", foreignKey: "idEstado"});
  estado.hasMany(ciudad, { as: "ciudads", foreignKey: "idEstado"});
  evento.belongsTo(estados_eventos, { as: "idEstadosEventos_estados_evento", foreignKey: "idEstadosEventos"});
  estados_eventos.hasMany(evento, { as: "eventos", foreignKey: "idEstadosEventos"});
  factura.belongsTo(evento, { as: "idEvento_evento", foreignKey: "idEvento"});
  evento.hasMany(factura, { as: "facturas", foreignKey: "idEvento"});
  notas.belongsTo(evento, { as: "idEvento_evento", foreignKey: "idEvento"});
  evento.hasMany(notas, { as: "nota", foreignKey: "idEvento"});
  notas.belongsTo(historial_clinico, { as: "idHistorialClinico_historial_clinico", foreignKey: "idHistorialClinico"});
  historial_clinico.hasMany(notas, { as: "nota", foreignKey: "idHistorialClinico"});
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
  estado.belongsTo(pais, { as: "idPais_pai", foreignKey: "idPais"});
  pais.hasMany(estado, { as: "estados", foreignKey: "idPais"});
  agenda.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(agenda, { as: "agendas", foreignKey: "colegiadoProfesional"});
  clinica.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(clinica, { as: "clinicas", foreignKey: "colegiadoProfesional"});
  historial_clinico.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(historial_clinico, { as: "historial_clinicos", foreignKey: "colegiadoProfesional"});
  profesional_especialidades.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(profesional_especialidades, { as: "profesional_especialidades", foreignKey: "colegiadoProfesional"});
  profesional_idiomas.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(profesional_idiomas, { as: "profesional_idiomas", foreignKey: "colegiadoProfesional"});
  titulo_profesional.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(titulo_profesional, { as: "titulo_profesionals", foreignKey: "colegiadoProfesional"});
  usuario.belongsTo(profesionales, { as: "colegiadoProfesional_profesionale", foreignKey: "colegiadoProfesional"});
  profesionales.hasMany(usuario, { as: "usuarios", foreignKey: "colegiadoProfesional"});
  evento.belongsTo(tipos_eventos, { as: "idTipoEvento_tipos_evento", foreignKey: "idTipoEvento"});
  tipos_eventos.hasMany(evento, { as: "eventos", foreignKey: "idTipoEvento"});
  evento.belongsTo(usuario, { as: "pacienteDni_usuario", foreignKey: "pacienteDni"});
  usuario.hasMany(evento, { as: "eventos", foreignKey: "pacienteDni"});
  historial_clinico.belongsTo(usuario, { as: "pacienteDni_usuario", foreignKey: "pacienteDni"});
  usuario.hasMany(historial_clinico, { as: "historial_clinicos", foreignKey: "pacienteDni"});
  mensaje.belongsTo(usuario, { as: "dniUsuarioRemitente_usuario", foreignKey: "dniUsuarioRemitente"});
  usuario.hasMany(mensaje, { as: "mensajes", foreignKey: "dniUsuarioRemitente"});
  mensaje.belongsTo(usuario, { as: "dniUsuarioReceptor_usuario", foreignKey: "dniUsuarioReceptor"});
  usuario.hasMany(mensaje, { as: "dniUsuarioReceptor_mensajes", foreignKey: "dniUsuarioReceptor"});

  return {
    agenda,
    ciudad,
    clinica,
    especialidades,
    estado,
    estados_eventos,
    evento,
    factura,
    historial_clinico,
    horarios_disponibles,
    idiomas,
    mediciones,
    mensaje,
    notas,
    notas_mediciones,
    opciones_mediciones,
    pais,
    profesional_especialidades,
    profesional_idiomas,
    profesionales,
    tipos_eventos,
    titulo_profesional,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
