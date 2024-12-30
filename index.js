require("dotenv").config();
const models = require('./models/models');
const express = require("express");
const router = require("./routes/index");
const sequelize = require('./db.config');
const cors = require("cors");
const path = require("path");
const fileUpload = require("express-fileupload");
const errorHandler = require("./middleware/errorHandlingMiddleWare");


const PORT = 9100;


const app = express();

app.use(cors());
app.use(express.json());
//say that files from folder Static gave as images
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use('/api', router);

app.use(errorHandler);


const start = async () => {
    try{
        await sequelize.authenticate()
        app.listen(PORT, () => console.log(`Server start at PORT: ` + PORT));
        await  sequelize.sync({ alter: true });
    }catch (err){
        console.log(err);
    }
}

start()