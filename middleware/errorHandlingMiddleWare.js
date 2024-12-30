const ApiError = require('../Error/ApiError');

module.exports = function(err, res, req, next){
    if(err instanceof ApiError){
        return req.status(err.status).json({message:err.message});
    }
    return res.status(500).json({message: "Непредвиденная ошибка"})
}