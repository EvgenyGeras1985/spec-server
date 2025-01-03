const {  DataTypes } = require("sequelize");
const sequelize = require("../db.config");

const User = sequelize.define('user', {
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING},
    surname:{type:DataTypes.STRING},
    patronymics:{type:DataTypes.STRING},
    phone: {type:DataTypes.STRING},
    email: {type:DataTypes.STRING},
    password: {type:DataTypes.STRING},
    role: {type:DataTypes.STRING, defaultValue: "USER"}
})

const Goods = sequelize.define('good', {
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    img:{type: DataTypes.STRING},
    title: {type:DataTypes.STRING},
    category: {type:DataTypes.STRING},
    article : {type:DataTypes.INTEGER},
    manufacturer: {type:DataTypes.STRING},
    warranty: {type:DataTypes.STRING},
    description: {type:DataTypes.STRING},
    certificate: {type:DataTypes.STRING},
    passport: {type:DataTypes.STRING},
    price: {type:DataTypes.INTEGER},
    category_id:{type: DataTypes.INTEGER},
})

const Category = sequelize.define('Category', {
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    category_id:{type: DataTypes.INTEGER},
})

const Comments = sequelize.define('comments', {
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    user_id:{type: DataTypes.INTEGER},
    good_id: {type:DataTypes.INTEGER},
})

const Likes = sequelize.define('likes', {
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    user_id:{type: DataTypes.INTEGER},
    good_id: {type:DataTypes.INTEGER},
})

module.exports = {
    User,
    Goods,
    Comments,
    Likes,
    Category,
}



