class ApiError extends Error{
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message){
        //client side error
        return new ApiError(404, message);
    }

    static notAuth(message){
        return new ApiError(401, message);
    }

    static  Internal(message){
        return new ApiError(500, message);
    }

    static  Forbidden(message){
        return new ApiError(403, message);
    }

    static  badGateway(message){
        return new ApiError(502, message);
    }

}

module.exports = ApiError;