const express = require('express'); // requiero archivos de la libreria express

const productos = require('./products'); // guardo en variable la ruta productos
const auth = require('./auth');

const router = express.Router(); // Instancio el router

const ping = require('./ping'); // Guardar en una variable la ruta de ping

router.use('/products', productos); //pongo en uso las rutas

router.use('/ping', ping);

router.use('/auth', auth);

module.exports = router; //importo el router en otros archivos