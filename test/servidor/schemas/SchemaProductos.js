const mongoose = require('mongoose');
const { Schema } = mongoose;

const SchemaProducto = new Schema({
    referencia: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    puntos: {
        type: Number,
        required: true
    },
    donacion: {
        type: Number,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('producto', SchemaProducto);