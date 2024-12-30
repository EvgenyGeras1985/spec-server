const {  DataTypes } = require("sequelize");
const sequelize = require("../db.config");

const User = sequelize.define('user', {
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING},
    phone: {type:DataTypes.STRING},
    email: {type:DataTypes.STRING},
    password: {type:DataTypes.STRING},
    role: {type:DataTypes.STRING, defaultValue: "USER"}
})

const Good = sequelize.define('good', {
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

})

module.exports = {
    User,
    Good,
}



