const express = require('express'); // requiero archivos de la libreria express

const checkAuth = require('../middleware/authorizeToken');
const productos = require('./products'); // guardo en variable la ruta productos
const admin = require('./user');
const router = express.Router(); // Instancio el router

const ping = require('./ping'); // Guardar en una variable la ruta de ping

router.use('/products', checkAuth, productos); //pongo en uso las rutas

router.use('/home', productos);
router.use('/ping', ping);

router.use('/login', admin);

module.exports = router; //importo el router en otros archivos