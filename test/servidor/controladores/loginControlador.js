const controlador = {};
const bcrypt = require('bcrypt');
const usuario = require('../schemas/SchemaCuenta');

controlador.login = (req, res) => {
    const { contraseña, correo } = req.body;
    usuario.findOne({ correo: correo })
        .then(user => {
            if (!user) res.status(404).send({ message: 'No se encontro el usuario' });
            bcrypt.compare(contraseña, user.contraseña)
                .then(match => {
                    if (match) {
                        payload = {
                            nombres: user.usuario.nombres,
                            apellidos: user.usuario.apellidos,
                            identificacion: user.usuario.identificacion,
                            correo: user.correo,
                            contraseña: user.contraseña
                        };
                        /*jwt.sign({ payload }, config.SECRET_TOKEN, function(err, token) {
                            if (err) {
                                res.status(500).send(err);
                            } else {
                                res.status(200).send({ message: 'Acesso ', token, payload });
                            }
                        });*/
                        res.status(200).send({ message: 'Acceso', payload });
                    } else {
                        res.status(200).send({ message: 'Contrsaeña incorrecta' });
                    }
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).send({ err });
                });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ err });
        });
};

module.exports = controlador;