const { DataTypes } = require("sequelize");
const sequelize = require("../db.config");

const Cart = sequelize.define('cart', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, unique: true }, // Внешний ключ
    good_id: { type: DataTypes.INTEGER }
});

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
    patronymics: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
});

const Goods = sequelize.define('good', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    image: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING },
    article: { type: DataTypes.INTEGER },
    manufacturer: { type: DataTypes.STRING },
    warranty: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    certificate: { type: DataTypes.STRING },
    passport: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    total_quantity: { type: DataTypes.INTEGER, allowNull: true }
});

const Comments = sequelize.define('comments', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    good_id: { type: DataTypes.INTEGER }
});

const Likes = sequelize.define('likes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER },
    good_id: { type: DataTypes.INTEGER }
});

// Ассоциации
User.hasOne(Cart, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Cart.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports = {
    User,
    Goods,
    Comments,
    Likes,
    Cart
};



