const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const Mongoose = require('mongoose');
const superAdmin = require("./routes/superAdmin.js");
const admin = require("./routes/admin.js");
require('dotenv').config();

app.use(express.json());

Mongoose.set('strictQuery', false); 

app.use("/superAdmin", superAdmin);
app.use("/admin", admin);

const PORT = process.env.PORT || 3000;

Mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true},
    (err) => {
        if (!err) {
            console.log("Connected to MongoDB");
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            })
        }
        else throw err;
    }
);