const Users = require('../models/user');

const checkAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        const user = await Users.findOne({token});
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