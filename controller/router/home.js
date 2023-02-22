const express = require('express');
const user = require('../models/userSchema');
const router = express.Router();
const cookieparser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv'); //dotenv is used for config file so that we can secure our password
router.use(cookieparser());
dotenv.config({ path: './config.env' });

const JWT_KEY = process.env.JWT_KEY;

require('..//db/conn.js');
const users = require('../models/userSchema');

const authenticate = async(req, res, next) => {
    console.log("its in authenticate");
    console.log(req.cookies.login);
    const isThere = jwt.verify(req.cookies.login, JWT_KEY);
    console.log(isThere);
    console.log(isThere.payload);
    const rootuser = await users.findOne({ _id: isThere.payload });
    console.log(rootuser);
    if (!rootuser) {
        throw new Error("user not found");
    }
    req.rootuser = rootuser;
    req.token = req.cookies.login;
    req.userid = rootuser._id;

    next();
};

router.get('/home', authenticate, async(req, res) => {
    console.log("to home");
    res.send(req.rootuser);
});

module.exports = router;