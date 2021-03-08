const { Router } = require('express');
const router = Router();
const controlador = require('../controladores/loginControlador');

router.post('/', controlador.login);
router.get('/:id', controlador.searchByMeail);

module.exports = router;