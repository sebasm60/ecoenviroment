const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const SchemaEmpresas = new Schema({
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
        default: 'empresa'
    },
    usuario: {
        nit: {
            type: String,
            required: true
        },
        nombre: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: false,
            default: '/img/default.jpg'
        }
    }
});

SchemaEmpresas.pre('save', function(next) {
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

SchemaEmpresas.pre('findOneAndUpdate', function(next) {
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

module.exports = mongoose.model('empresa', SchemaEmpresas);