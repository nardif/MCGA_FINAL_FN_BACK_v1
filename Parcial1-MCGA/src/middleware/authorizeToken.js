const Users = require('../models/user');

const checkAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            throw new Error('Token not provided');
        }
        const user = await Users.findOne({token}).select({ name: true, email: true, token: true});
        if(token.toString() !== user.token.toString()){
            throw new Error('Invalid token');
        }
        req.user = user;
        next();
    } catch(error){
        res.status(401).json({
            message: 'Unauthorized',
            data: error.toString(),
        });
    }
};
module.exports = checkAuth;