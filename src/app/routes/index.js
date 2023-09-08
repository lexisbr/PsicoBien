const usuariosRoutes = require('./usuario.js');

module.exports = function(app) {
    app.use('/usuarios', usuariosRoutes);
}