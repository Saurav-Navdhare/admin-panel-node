const Mongoose = require("mongoose");

const UserCredentials = Mongoose.Schema({
    enrollmentNumber : {
        type : String,
        require : true,
    },
    encryptedPass : {
        type : String,
        require : true,
    }
})


module.exports = Mongoose.model("UserCredentials", UserCredentials);