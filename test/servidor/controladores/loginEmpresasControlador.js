const controlador = {};
const bcrypt = require('bcrypt');
const empresa = require('../schemas/SchemaEmpresas');
const jwt = require('jsonwebtoken');
const config = require('../configuraciones/keys');

controlador.loginEmpresa = async(req, res) => {
    const { contraseña, correo } = req.body;
    empresa.findOne({ correo: correo })
        .then(empresa => {
            if (!empresa) res.status(404).send({ message: 'No se encontro el usuario' });
            bcrypt.compare(contraseña, empresa.contraseña)
                .then(match => {
                    if (match) {
                        payload = {
                            nombre: empresa.usuario.nombre,
                            nit: empresa.usuario.nit,
                            correo: empresa.correo,
                            imagen: empresa.usuario.imagen
                        };
                        jwt.sign({ payload }, config.SECRET_TOKEN, function(err, token) {
                            if (err) {
                                res.status(500).send(err);
                            } else {
                                res.status(200).send({ message: 'Acesso ', token, payload });
                            }
                        });
                        res.status(200).send({ message: 'Acceso', payload });
                    } else {
                        res.status(200).send({ message: 'Contrsaeña incorrecta' });
                    }
                })
                .catch(err => {
                    res.status(500).send({ err });
                });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ err });
        });
};

controlador.searchByMeail = async(req, res) => {
    const empresas = await empresa.findOne({ correo: req.params.id });
    res.json({
        correo: empresas.correo,
        nombre: empresas.usuario.nombre,
        nit: empresas.usuario.nit,
        imagen: empresas.usuario.imagen
    });
};

module.exports = controlador;