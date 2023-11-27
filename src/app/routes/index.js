const usuariosRoutes = require('./usuarios.js');
const profesionalesRoutes = require('./profesionales.js');
const ubicacionesRoutes = require('./ubicaciones.js');
const idiomasRoutes = require('./idiomas.js');
const adminRoutes = require('./admin.js');
const citasRoutes = require('./citas.js');

module.exports = function(app) {
    app.use('/usuarios', usuariosRoutes);
    app.use('/profesionales', profesionalesRoutes);
    app.use('/ubicaciones', ubicacionesRoutes);
    app.use('/idiomas', idiomasRoutes);
    app.use('/admin', adminRoutes);
    app.use('/citas',citasRoutes)
}