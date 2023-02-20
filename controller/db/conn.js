const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,    //this two were creating an issue in setting up so i comment it
    //useFindAndModify: false
}).then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log("error occured in connecting to database " + err);
});