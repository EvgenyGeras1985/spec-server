const {User} = require("../models/models");
const {Cart} = require("../models/models");
const ApiError = require("../Error/ApiError");
const path = require("path");
const uuid = require("uuid");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Op } = require("sequelize");


class UserController{
    async registration(req, res,next){
        try{
            const {name, surname,patronymics, email, phone, password} = req.body;

            if(!email || !password) {
                return next(ApiError.badRequest(''))
            }

            const candidate = await User.findOne({
                where: {
                    email: email
                }
            })

            if(candidate){
                return next(ApiError.badRequest('Такой пользователь уже существует'))
            }

            const hashPassword = await bcrypt.hash(password, 5);

            const user = await User.create({
                name,
                surname,
                patronymics,
                email,
                phone,
                password: hashPassword,
            },{fields:['email','phone', 'password','name', 'surname','patronymics']});

            const cart = await Cart.create({
                userId: user.id
            })

            res.json(cart)


            const token = jwt.sign({
                    id: user.id,
                    email: user.email,
                    role: user.role
                },
                process.env.SECRET_KEY,
                {expiresIn: '2h'}
            );

            return res.json({token})
        }catch(err){
            next(ApiError.badRequest(err.message))
        }
    }

    async userLog(req, res, next){
        try{
            const { password, email } = req.body;

            if(!email || !password) {
                return next(ApiError.badRequest('Некорректный email или password'))
            }

            const candidate = await User.findOne({
                where: {
                    email: email
                }
            })

            if(!candidate){
                return next(ApiError.badRequest('Пользователь не зарегестрирован'))
            }
            let comparePassword = bcrypt.compareSync(password, candidate.password);
            if(!comparePassword){
                return  next(ApiError.badRequest('Пароль не верный'))
            }
            const token = jwt.sign({
                    id:candidate.id,
                    email:candidate.email,
                    role:candidate.role
                },
                process.env.SECRET_KEY,
                {expiresIn: '2h'}
            )
            return res.json({
                token,
                text: 'Вы успешно вошли в аккаунт',
                name: candidate.name,
                surname: candidate.surname,
                patronymics: candidate.patronymics,
                id:candidate.id,
                cart_id:candidate.id,
                role: candidate.role
            })

        }catch (err){
            next(ApiError.badRequest(err.message))
        };
    }

    async userAuth(req, res){
        // Get token value to the json body
        const token = req.body.token;

        // If the token is present
        if(token){

            // Verify the token using jwt.verify method
            const decode = jwt.verify(token, process.env.SECRET_KEY);
            const user = decode.id;
            const candidate = await User.findOne({
                where: {
                    id: user
                }
            })
            console.log(candidate)

            //  Return response with decode data
            res.json({
                data: candidate,
            });
        }else{

            // Return response with error
            res.json({
                data: 'error'
            });
        }
    }

    async getUserById(req,res,next){
        try{
            const { id } = req.body

            const user = await User.findByPk({

            })
        }catch (err){
            console.log(err)
        }
    }
}

module.exports = new UserController();