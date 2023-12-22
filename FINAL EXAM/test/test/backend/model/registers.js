const mongoose = require("mongoose")

const register = new mongoose.Schema({
    sname: {
        type: String
    },
    semail: {
        type: String
    },
    sphone: {
        type: String
    },
    spassword: {
        type: String
    },
    scpassword: {
        type: String
    }
});

const registers = mongoose.model("register", register);
module.exports = registers;
