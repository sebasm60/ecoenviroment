const cuenta = require('../schemas/SchemaCuenta');
const mail = require('../midlewares/enviarCorreo');
const controlador = {};

controlador.registroUsuario = async(req, res) => {
    try {
        const { correo, contraseña, identificacion, nombres, apellidos } = req.body;
        const nuevaCuenta = new cuenta({
            correo,
            contraseña,
            usuario: {
                identificacion,
                nombres,
                apellidos
            }
        });
        await nuevaCuenta.save();
        mail(correo, contraseña, identificacion, nombres, apellidos);
        res.json({ nuevaCuenta });
    } catch (error) {
        res.status(500).json({ errorCode: error.err, message: "Error en el servidor." });
    };
};

controlador.searchByMeail = async(req, res) => {
    const user = await cuenta.findOne({ correo: req.params.id });
    if (user != null) {
        res.json(user.correo);
    } else{
        res.json({user});
    }      
};

module.exports = controlador;