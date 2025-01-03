const uuid = require("uuid");
const path = require("path");
const {Goods} = require("../models/models");
const ApiError = require("../Error/ApiError");


class GoodController{
    async addGood(req, res,next){
        try{
            console.log('server func addGood start...')
            const {name, category,article, manufacturer, warranty, description, price} = req.body;

            const { img , certificate, passport} = req.files;
            console.log(req.files)

            let fileName = uuid.v4() + ".jpg";
            console.log(fileName)
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            console.log('done')

            let fileName1 = uuid.v4() + ".docx";
            await certificate.mv(path.resolve(__dirname, '..', 'static', fileName1))

            let fileName2 = uuid.v4() + ".docx";
            await passport.mv(path.resolve(__dirname, '..', 'static', fileName2))

            const good = await Goods.create({name,category,article,manufacturer,warranty,description, price: +price, img:fileName, certificate:fileName1, passport:fileName2})
            return res.json(good);

        }catch(err){
            next(ApiError.badRequest(err.message))
        }
    }
}

module.exports = new GoodController();