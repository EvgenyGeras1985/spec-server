const uuid = require("uuid");
const path = require("path");
const {Goods} = require("../models/models");
const ApiError = require("../Error/ApiError");


class GoodController{
    async GetAllGood(req,res){
        try {
            const goods = await Goods.findAll()
            return res.json(goods)
        }catch (err){
            console.log(err)
        }
    }
    async addGood(req, res,next){
        try{
            console.log('server func addGood start...')
            const {name, category,article, manufacturer, warranty, description, price} = req.body;

            const { image , certificate, passport} = req.files;
            console.log(req.files)

            let fileName = uuid.v4() + ".jpg";
            console.log(fileName)
            image.mv(path.resolve(__dirname, '..', 'static', fileName))

            let fileName1 = uuid.v4() + ".docx";
            certificate.mv(path.resolve(__dirname, '..', 'static', fileName1))

            let fileName2 = uuid.v4() + ".docx";
            passport.mv(path.resolve(__dirname, '..', 'static', fileName2))

            const good = await Goods.create({name,category,article,manufacturer,warranty,description, price: +price, image:fileName, certificate:fileName1, passport:fileName2})
            return res.json(good);

        }catch(err){
            next(ApiError.badRequest(err.message))
        }
    }
}

module.exports = new GoodController();