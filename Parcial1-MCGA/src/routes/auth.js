const express = require('express');
const ctrlAuth = require ('../controllers/login')


const router = express.Router(); // Instacio el router

router.post('/login',ctrlAuth.login) // Esucha en el método GET en /login/



module.exports = router // Habilito la importación en otros lugares.