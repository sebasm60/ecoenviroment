const { Router } = require('express');
const router = Router();
const controlador = require('../controladores/usuariosControlador');
const upload = require('../midlewares/storage');

router.get('/listar', controlador.listarUsuarios);
router.get('/search/:id', controlador.search);
router.put('/update/:id', controlador.update);
router.delete('/delete/:id', controlador.delete);

module.exports = router;