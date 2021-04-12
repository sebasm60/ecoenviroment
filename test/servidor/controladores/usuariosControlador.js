const usuario = require('../schemas/SchemaCuenta');
const controlador = {};

controlador.search = async(req, res) => {
    const Usuario = await usuario.findById(req.params.id);
    res.json(Usuario);
};

controlador.update = async(req, res) => {
try {
    const { correo, contraseña, identificacion, imagen, telefono, nombres, apellidos, departamento, ciudad, barrio, nomenclatura } = req.body;
    const newUsuario = {
        correo,
        contraseña,
        usuario: {
            identificacion,
            nombres,
            apellidos,
            imagen, 
            telefono
        },
        direccion: {
            departamento,
            ciudad,
            barrio,
            nomenclatura
        }
    };
    await usuario.findOneAndUpdate(req.params.id, newUsuario);
    res.json({newUsuario});

} catch (error) {
    console.log(error)
}
};

controlador.delete = async(req, res) => {
    await usuario.findByIdAndDelete(req.params.id);
    res.json({ message: 'usuario eliminado' });
};

controlador.listarUsuarios = async(req, res) => {
    const Usuario = await usuario.find();
    res.json(Usuario);
};

module.exports = controlador;