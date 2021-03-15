const producto = require('../schemas/SchemaProductos');
const controlador = {};

controlador.agregarProducto = async(req, res) => {
    try {
        const { referencia, nombre, precio, cantidad, empresa, descripcion, categoria, puntos } = req.body
        const nuevoProducto = new producto({
            referencia,
            nombre,
            precio,
            cantidad,
            empresa,
            descripcion,
            categoria,
            puntos
        });
        await nuevoProducto.save();
        res.json({ nuevoProducto });
    } catch (error) {
        res.status(500).json({ errorCode: error.err, message: "Error en el servidor." });
    };
};

module.exports = controlador;