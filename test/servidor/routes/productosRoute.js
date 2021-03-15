const { Router } = require('express');
const router = Router();
const controlador = require('../controladores/productosControlador');

router.post('/agregar', controlador.agregarProducto);

module.exports = router;