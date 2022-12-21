const esquemaUsers = require('../models/user');
const jwt = require('jsonwebtoken');


//Guarda el nuevo token en la DB
const login = async (req, res) => {
   const email = req.body?.email;
   const password = req.body?.password;
   console.log({ email, password })
    if (!email || !password) {
        return res.status(422).json({
            error: true,
            message: 'Ingrese correo electrónico y contraseña'
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
        const decoded = await jwt.verify(token, process.env.JWT_KEY);
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
            return res.status(400).json({
                error: true,
                msg: error,
            });
        }    
}
module.exports = {login}