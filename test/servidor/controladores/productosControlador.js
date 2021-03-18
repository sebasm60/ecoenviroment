const producto = require('../schemas/SchemaProductos');
const controlador = {};
const mongoose = require('mongoose');

controlador.agregarProducto = async(req, res) => {
    try {
        const { referencia, nombre, precio, cantidad, empresa, descripcion, categoria, puntos, descuento, imagen } = req.body
        const nuevoProducto = new producto({
            referencia,
            nombre,
            precio,
            cantidad,
            empresa,
            descripcion,
            categoria,
            puntos,
            descuento,
            imagen
        });
        await nuevoProducto.save();
        res.json({ nuevoProducto });
    } catch (error) {
        res.status(500).json({ errorCode: error.err, message: "Error en el servidor." });
    };
};

controlador.listarProductos = async(req, res) => {
    const productos = await producto.find();
    res.json(productos);
};

module.exports = controlador;