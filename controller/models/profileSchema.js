const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneno: {
        type: String,
        required: true
    },
    mobileno: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    techskillname1: {
        type: String,
        required: true
    },
    techskillname2: {
        type: String,
        required: true
    },
    techskillname3: {
        type: String,
        required: true
    },
    techskillname4: {
        type: String,
        required: true
    },
    techskillname5: {
        type: String,
        required: true
    },
    techskilllevel1: {
        type: Number,
        required: true
    },
    techskilllevel2: {
        type: Number,
        required: true
    },
    techskilllevel3: {
        type: Number,
        required: true
    },
    techskilllevel4: {
        type: Number,
        required: true
    },
    techskilllevel5: {
        type: Number,
        required: true
    },
    softskillname1: {
        type: String,
        required: true
    },
    softskillname2: {
        type: String,
        required: true
    },
    softskillname3: {
        type: String,
        required: true
    },
    softskillname4: {
        type: String,
        required: true
    },
    softskillname5: {
        type: String,
        required: true
    },
    softskilllevel1: {
        type: Number,
        required: true
    },
    softskilllevel2: {
        type: Number,
        required: true
    },
    softskilllevel3: {
        type: Number,
        required: true
    },
    softskilllevel4: {
        type: Number,
        required: true
    },
    softskilllevel5: {
        type: Number,
        required: true
    }
});

const profile = mongoose.model('PROFILE', profileSchema);
module.exports = profile;