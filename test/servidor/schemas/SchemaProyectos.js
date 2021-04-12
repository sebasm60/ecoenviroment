const mongoose = require('mongoose');
const { Schema } = mongoose;

const SchemaProyecto = new Schema({
    numeroDeProyecto: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    meta: {
        type: Number,
        required: true
    },
    avance: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('proyecto', SchemaProyecto);