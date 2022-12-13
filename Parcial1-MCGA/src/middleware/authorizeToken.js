const jwt = require('jsonwebtoken');
const Users = require('../models/user');

const checkAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        const decoded = await jwt.verify(token, process.env.JWT_KEY);
        const user = await Users.findOne({iat: decoded.iat});
        //console.log(decoded)
        //console.log("token: ", token, "user: ", user)
        if(token.toString() !== user.token.toString()){
            throw new Error('Invalid token');
            
        }
        next();
    } catch(error){
        res.status(401).json({
            message: 'Unauthorize',
            data: error.toString(),
        });
    }
};
module.exports = checkAuth;