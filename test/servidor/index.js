const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
require('dotenv').config();
require('./configuraciones/databaseMongodb');

//Configuracion.
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));

//Midlewares.
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes.
app.use('/signup', require('./routes/registroRoute'));
app.use('/login', require('./routes/loginRoute'));
app.use('/producto', require('./routes/productosRoute'));
app.use('/usuario', require('./routes/usuarioRoute'));
app.use('/SignupEmpresas', require('./routes/registroEmpresasRoute'));
app.use('/loginEmpresas', require('./routes/loginEmpresaRoute'));
app.use('/proyecto', require('./routes/proyectosRoute'));

//Inciar servidor.
app.listen(app.get('port'), () => {
    console.log(`Start on port ${app.get('port')}`);
});