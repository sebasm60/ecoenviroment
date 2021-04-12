const cuenta = require('../schemas/SchemaEmpresas');
const mail = require('../midlewares/enviarCorreo');
const controlador = {};

controlador.registroEmpresa = async(req, res) => {
    try {
        const { correo, contraseña, nit, nombre } = req.body;
        const nuevaCuenta = new cuenta({
            correo,
            contraseña,
            usuario: {
                nit,
                nombre
            }
        });
        await nuevaCuenta.save();
        mail(correo, contraseña, nit, nombre);
        res.json({ nuevaCuenta });
    } catch (error) {
        res.status(500).json({ errorCode: error.err, message: "Error en el servidor." }), console.log(error);
    };
};

controlador.searchByMeail = async(req, res) => {
    const user = await cuenta.findOne({ correo: req.params.id });
    if (user != null) {
        res.json(user.correo);
    } else {
        res.json({ user });
    }
};

module.exports = controlador;