const { Router } = require('express');
const router = Router();
const controlador = require('../controladores/loginEmpresasControlador');

router.post('/', controlador.loginEmpresa);
router.get('/:id', controlador.searchByMeail);

module.exports = router;