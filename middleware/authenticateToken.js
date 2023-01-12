const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    // Above line === if we had an authHeader then return authHeader.split(' ')[1] i.e token else return undefined
    if(!token){
        return res.status(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
        if(err){
            return res.sendStatus(403);
        }
        req.user = user;
        next();

    })
}
module.exports = {authenticateToken}