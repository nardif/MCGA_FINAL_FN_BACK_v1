const esquemaUsers = require('../models/user');
const jwt = require('jsonwebtoken');


//Guarda el nuevo token en la DB
const login = async (req, res) => {
   const email = req.body?.email;
   const password = req.body?.password;
    if (!email || !password) {
        return res.status(422).json({
            error: true,
            msg: 'Ingrese correo electrónico y contraseña'
        })
    }
    try {
        const user = await esquemaUsers.findOne({ email })
        if (!user) {
            throw new Error('User not found!')
        }
        if (user.password !== password) {
            const err = new Error('Wrong credentials!');
            err.status = 401;
            throw err;
        }

        const token = jwt.sign(
            {
                email,
                userId: user._id,
            },
            process.env.JWT_KEY,
            {
                expiresIn:'1d',
            },
        );

        user.token = token;
        await user.save();
        
        return res.status(200).json({
            message: 'User Logged',
            data: {
                name: user.name,
                email: user.email,
                _id: user._id,
                token: user.token,
            },
        })
    }
      catch (error) {
        return res.status(error.status || 400).json({
            error: true,
            msg: error,
        });
    }    
}
const getUserData = async (req, res) => {
    const userId = req.user._id;
   try {
    const user = await esquemaUsers.findById(userId).select({ name: true, email: true, token: true });
    if (!user) {
        const err = new Error('User not found!');
        err.status = 404;
        throw err;
    }

    return res.json({
        msg: 'Authorized',
        data: user
    })
   } catch(err) {
    return res.status(err.status || 401).json({
        error: true,
        msg: err.toString()
    })
   }
}

module.exports = {login, getUserData}
