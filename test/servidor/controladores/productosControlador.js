const producto = require('../schemas/SchemaProductos');
const controlador = {};

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

controlador.search = async (req, res) => {
    const Producto = await producto.findById(req.params.id);
    res.json(Producto);
};

controlador.update = async (req, res) => {
    const { referencia, nombre, precio, cantidad, empresa, descripcion, categoria, puntos, descuento, imagen } = req.body
    const newProducto = {
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
    };
    await producto.findByIdAndUpdate(req.params.id, newProducto);
    res.json({message : 'Producto actualizado'});
};

controlador.delete = async (req, res) => {
    await producto.findByIdAndDelete(req.params.id);
    res.json({message : 'Producto eliminado'});
};

controlador.listarProductos = async(req, res) => {
    const productos = await producto.find();
    res.json(productos);
};

module.exports = controlador;