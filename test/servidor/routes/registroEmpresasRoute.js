const { Router } = require('express');
const router = Router();
const controlador = require('../controladores/registroEmpresasControlador');

router.post('/', controlador.registroEmpresa);
router.get('/:id', controlador.searchByMeail);

module.exports = router;