const usuario = require('../schemas/SchemaCuenta');
const controlador = {};

controlador.search = async (req, res) => {
    const Usuario = await usuario.findById(req.params.id);
    res.json(Usuario);
};

controlador.update = async (req, res) => {
    const { correo, contraseña, identificacion, nombres, apellidos } = req.body;
    const newUsuario = {
        correo, 
        contraseña, 
        identificacion, 
        nombres, 
        apellidos
    };
    await usuario.findByIdAndUpdate(req.params.id, newUsuario);
    res.json({message : 'Usuario actualizado'});
};

controlador.delete = async (req, res) => {
    await usuario.findByIdAndDelete(req.params.id);
    res.json({message : 'usuario eliminado'});
};

controlador.listarUsuarios = async(req, res) => {
    const Usuario = await usuario.find();
    res.json(Usuario);
};

module.exports = controlador;