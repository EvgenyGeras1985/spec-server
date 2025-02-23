const path = require("path");
const {Cart} = require("../models/models");
const ApiError = require("../Error/ApiError");
const jwt = require("jsonwebtoken");


class CartController {
    async create(req, res){
        try {
            const {id} = req.body;

            const cart = await Cart.create({
                user_id : id
            })

            return res.json(cart);
        }catch (err){
            console.log(err)
        }
    }

    async add(res,req){

    }
}

module.exports = new CartController();