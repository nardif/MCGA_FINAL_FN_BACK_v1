const esquemaUsers = require('../models/user');
const jwt = require('jsonwebtoken');




//Guarda el nuevo token en la DB
const updateUser = async (req, res) => {
   // console.log("token1: ")
    try {
        const token = jwt.sign(
            {
                email: URLSearchParams.email,
                userId: esquemaUsers._id,
            },
            process.env.JWT_KEY,
            {
                expiresIn:'1d',
            },
        );
        const decoded = await jwt.verify(token, process.env.JWT_KEY);
     //   console.log("token2: ", token)
        const updatedUser = await esquemaUsers.findOneAndUpdate(
            {email: req.params.email},
            {token, iat: decoded.iat},
            {new: true},
        );
     //   console.log(req)
        return res.status(200).json({
            message: 'User Logged',
            data: {
                email:updatedUser.email,
                _id:updatedUser._id,
                token:updatedUser.token,
            },
        })
        }
        catch (error) {
        //    console.log("token3: ", error)
            return res.status(400).json({
                error: true,
                msg: error,
            });
        }
}
module.exports = {updateUser}