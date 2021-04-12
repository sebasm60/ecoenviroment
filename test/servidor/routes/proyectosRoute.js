const { Router } = require('express');
const router = Router();
const controlador = require('../controladores/proyectoControlador');

router.post('/agregar', controlador.agregarProyecto);
router.get('/listar', controlador.listarProyectos);
router.get('/listarPorEmpresa/:id', controlador.listarProyectosPorEmpresa);
router.get('/search/:id', controlador.search);
router.put('/update/:id', controlador.update);
router.delete('/delete/:id', controlador.delete);

module.exports = router;