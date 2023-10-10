const db = require("../../models");
const Paises = db.paises;
const Estados = db.estados;
const Ciudades = db.ciudades;

// controller to get all countries
exports.getCountries = async (req, res) => {
    try {
        const countries = await Paises.findAll(); // assuming you have a Country model
        res.status(200).json(countries);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getStates = async (req, res) => {
    const { idPais } = req.params;
    try {
        const states = await Estados.findAll({ where: { idPais } });
        res.status(200).json(states);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// controller to get all cities for a given state
exports.getCities = async (req, res) => {
    const { idEstado } = req.params;
    try {
        const cities = await Ciudades.findAll({ where: { idEstado } }); // assuming you have a City model with a stateId foreign key
        res.status(200).json(cities);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
