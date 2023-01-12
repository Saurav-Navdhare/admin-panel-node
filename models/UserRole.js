const Mongoose = require("mongoose");

const UserRole = Mongoose.Schema({
    enrollmentNumber : {
        type : String,
        require : true,
    },
    userType : {
        type : String,
        default : "user"
    }
})

module.exports = Mongoose.model("UserRole", UserRole);