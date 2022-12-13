const express = require('express');
const ctrlUsers = require ('../controllers/login')


const router = express.Router(); // Instacio el router

router.get('/email/:email',ctrlUsers.updateUser) // Esucha en el método GET en /login/



module.exports = router // Habilito la importación en otros lugares.