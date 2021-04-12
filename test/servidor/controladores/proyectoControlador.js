const proyecto = require('../schemas/SchemaProyectos');
const controlador = {};

controlador.agregarProyecto = async(req, res) => {
    try {
        const { numeroDeProyecto, nombre, meta, avance, descripcion, empresa } = req.body
        const nuevoProyecto = new proyecto({
            numeroDeProyecto,
            nombre,
            meta,
            avance,
            descripcion,
            empresa
        });
        await nuevoProyecto.save();
        res.json({ nuevoProyecto });
    } catch (error) {
        res.status(500).json({ errorCode: error.err, message: "Error en el servidor.", error });
    };
};

controlador.search = async (req, res) => {
    const Proyecto = await proyecto.findById(req.params.id);
    res.json(Proyecto);
};

controlador.update = async (req, res) => {
    const { numeroDeproyecto, nombre, meta, avance, descripcion, empresa } = req.body
    const nuevoProyecto = {
        numeroDeproyecto,
        nombre,
        meta,
        avance,
        descripcion,
        empresa
    };
    await proyecto.findByIdAndUpdate(req.params.id, nuevoProyecto);
    res.json({message : 'proyecto actualizado'});
};

controlador.delete = async (req, res) => {
    await proyecto.findByIdAndDelete(req.params.id);
    res.json({message : 'proyecto eliminado'});
};

controlador.listarProyectos = async(req, res) => {
    const proyectos = await proyecto.find();
    res.json(proyectos);
};

controlador.listarProyectosPorEmpresa = async(req, res) => {
    const proyectos = await proyecto.find({empresa : req.params.id});
    res.json(proyectos);
};

module.exports = controlador;