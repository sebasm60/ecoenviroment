const { Router } = require('express');
const router = Router();
const controlador = require('../controladores/registroControlador');

router.post('/', controlador.registroUsuario);

module.exports = router;