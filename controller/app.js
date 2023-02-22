const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv'); //dotenv is used for config file so that we can secure our password

dotenv.config({ path: './config.env' });
//const DB = 'mongodb+srv://dev0408patel:bharatpatel@cluster0.9fokldf.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT;

//mongoose.connect() is an promise(thase k nai thai evi bej possibility)
//give database url as an address and some options which is mandatory



require('./db/conn.js');
app.use(express.json());
const user = require('./models/userSchema');
app.use(require('./router/auth'));
app.use(require('./router/home'));
const middleware = (req, res, next) => {
    console.log("this is a middleware");
    next(); // next is used to pass from this middleware if not used then it will stuck in this function and wont go ahead...
};

app.get('/', (req, res) => {
    res.send("This is the home page");
});

app.get('/profile', middleware, (req, res) => {
    res.send("This is the Profile page");
});

app.get('/classroom', middleware, (req, res) => {
    res.send("This is the Classroom page");
});

app.get('/timeline', middleware, (req, res) => {
    res.send("This is the TimeLine page");
});


app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
})