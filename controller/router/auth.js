const express = require('express');
const user = require('../models/userSchema');
const router = express.Router();

require('..//db/conn.js');
const users = require('../models/userSchema');

router.get('/', (req, res) => {
    res.send("This is the home page from router");
});

router.post('/register', async(req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        console.log("please provide all the field");
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
        const find = await user.findOne({ email: email, password: password });
        if (find) {
            //return res.status(201).json({ message: "user login" });
            return res.status(201).json({ message: `user with the name ${find.name} id logged in` });
        } else {
            return res.status(422).json({ error: "incorrect credentials" });
        }
    } catch {
        return res.status(501).json({ error: "error occured" });
    }
});

module.exports = router;