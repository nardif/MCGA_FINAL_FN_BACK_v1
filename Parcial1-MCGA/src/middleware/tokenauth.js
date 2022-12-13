const Admin = require('../models/user')
// Ejemplo de la función checkToken:
const checkToken = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({message: 'aaaaa'})
    }
    // buscamos en la base de datos un administrador con la apiKey enviada.
    // const response = await Admin.findOne({ 
    //     apiKey: req.headers.authorization, 
    //     isActive: true,
    //   logicDelete: false 
    // });
    const response = process.env.APIKEY
    // en caso de existir el administrador, continuamos con la ejecución, sino retornamos un error.
    if (response === req.headers.authorization) {
      req.apiKey = response;
      return next();
    } else {
    return res.status(403).json({message: 'Not allowed!'})
    
    }
};
module.exports = checkToken; 