const { Router } = require('express');
const router = Router();
const controlador = require('../controladores/productosControlador');

router.post('/agregar', controlador.agregarProducto);
router.get('/listar', controlador.listarProductos);
router.get('/listarPorEmpresa/:id', controlador.listarProductosPorEmpresa);
router.get('/search/:id', controlador.search);
router.put('/update/:id', controlador.update);
router.delete('/delete/:id', controlador.delete);

module.exports = router;