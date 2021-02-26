const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const SchemaCuenta = new Schema({
    correo: {
        type: String,
        required: true,
        unique: true
    },
    contraseña: {
        type: String,
        required: true
    },
    usuario: {
        identificacion: {
            type: String,
            required: true
        },
        nombres: {
            type: String,
            required: true
        },
        apellidos: {
            type: String,
            required: true
        }
    }
});

SchemaCuenta.pre('save', function(next) {
    bcrypt.genSalt(10)
        .then(salts => {
            bcrypt.hash(this.contraseña, salts)
                .then(hash => {
                    this.contraseña = hash;
                    next();
                });
        })
        .catch(error => next(error));
});

module.exports = mongoose.model('cuenta', SchemaCuenta);