const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const Mongoose = require('mongoose');
const superAdmin = require("./routes/superAdmin.js");
const admin = require("./routes/admin.js");
require('dotenv').config();
// const { authenticateToken } = require("./middleware/authenticateToken");

app.use(express.json);

Mongoose.set('strictQuery', false); // To remove deprecation warning

// app.post("/admin", authenticateToken, (req, res) => {
//     const username = req.body.username;
//     const user = { name: username };
    
//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//     res.json({ accessToken: accessToken });
// });


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