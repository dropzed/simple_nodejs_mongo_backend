const jwt = require("jsonwebtoken");
const {secret} = require('../config');
// const cors = require("cors");


module.exports = function (req, res, next) { // not working wtf why???
    if(req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(403).json({message: 'No token provided'});
        }
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next()
    } catch (e) {
        console.log(e)
        return res.status(403).json({message: 'No token provided', erorr: e});
    }
}