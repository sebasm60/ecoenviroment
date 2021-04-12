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
    rol: {
        type: String,
        required: true,
        default: 'comprador'
    },
    puntos: {
        type: Number,
        required: true,
        default: 0
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
        },
        imagen: {
            type: String,
            required: false,
            default: '/img/default.jpg'
        },
        telefono: {
            type: String,
            required: false,
            default: "0000000000"
        }
    },
    direccion: {
        departamento: {
            type: String,
            required: false,
            default: 'N/A'
        },
        ciudad: {
            type: String,
            required: false,
            default: 'N/A',
        },
        barrio: {
            type: String,
            required: false,
            default: 'N/A'
        },
        nomenclatura: {
            type: String,
            required: false,
            default: 'N/A'
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

SchemaCuenta.pre('findOneAndUpdate', function(next) {
    if(this._update.contraseña){
        bcrypt.genSalt(10)
        .then(salts => {
            bcrypt.hash(this._update.contraseña, salts)
                .then(hash => {
                    this._update.contraseña = hash;
                    next();
                });
        })
        .catch(error => next(error));
    };    
});

module.exports = mongoose.model('cuenta', SchemaCuenta);