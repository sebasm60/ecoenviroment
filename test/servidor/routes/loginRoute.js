const { Router } = require('express');
const router = Router();
const controlador = require('../controladores/loginControlador');

router.post('/', controlador.login);

module.exports = router;