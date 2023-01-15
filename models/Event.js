const Mongoose = require("mongoose");

const Event = Mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    description : {
        type : String,
        require : true,
    },
    startDate : {
        type : Date,
        require : true,
    },
    endDate : {
        type : Date,
        require : true,
    },
    posterURL : {
        type : String
    },
});

module.exports = Mongoose.model("Event", Event);