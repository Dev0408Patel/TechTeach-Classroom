const express = require('express');
const user = require('../models/userSchema');
const router = express.Router();
const cookieparser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv'); //dotenv is used for config file so that we can secure our password

dotenv.config({ path: './config.env' });
const JWT_KEY = process.env.JWT_KEY;
require('..//db/conn.js');
const users = require('../models/userSchema');
router.use(cookieparser());

router.get('/', (req, res) => {
    res.send("This is the home page from router");
});

router.post('/register', async(req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        // console.log("please provide all the field");
        return res.status(422).json({ error: "please provide all the field" });
    }

    try {
        const finding = await users.findOne({ email: email });
        if (finding) {
            return res.status(422).json({ error: "user already exists" });
        } else {
            const user = new users({ name, email, phone, work, password, cpassword });
            await user.save();
            return res.status(201).json({ message: "user registered" });
        }
    } catch {
        return res.status(501).json({ error: "error occured" });
    }
});

router.post('/signin', async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
        return res.status(422).json({ error: "please provide all the field" });
    }
    try {
        const find = await user.findOne({ email, password });
        // console.log(find);
        if (find) {
            //return res.status(201).json({ message: "user login" });
            let uid = find._id;
            let token = jwt.sign({ payload: uid }, JWT_KEY);
            console.log(token);
            res.cookie('login', token, { httpOnly: true });
            console.log(req.cookies);

            return res.status(201).json({ message: `user with the name ${find.name} id logged in` });
        } else {
            return res.status(422).json({ error: "incorrect credentials" });
        }
    } catch {
        return res.status(501).json({ error: "error occured 501" });
    }
});

module.exports = router;