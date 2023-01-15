const userRole = require('../models/UserRole.js');
// as all are DB operations hence will require async await, so async func should be there
async function addAdmin(req, res){
    const enrollmentNumber = req.body.enrollmentNumber;
    try{
        const user = await userRole.findOne({enrollment});
        if(user){
            if(user.userType === "superAdmin") return res.status(403).send("Cannot add super admin");
            user.userType = "admin";
            const savedUser = await user.save();
            res.send(savedUser);
        }
        else{
            res.status(404).send("User not found");
        }
    } catch (err) {
        res.status(502).send(err);
    }
}

async function removeAdmin(req, res){
    const enrollmentNumber = req.body.enrollmentNumber;
    try{
        const user = await userRole.findOne({enrollment});
        if(user){
            if(user.userType === "superAdmin") return res.status(403).send("Cannot remove super admin");
            user.userType = "user";
            const savedUser = await user.save();
            res.send(savedUser);
        }
        else{
            res.status(404).send("User not found");
        }
    } catch (err) {
        res.status(502).send(err);
    }
}

async function listAdmins(req, res){
    try{
        const admins = await userRole.find({userType: "admin"});
        res.send(admins);
    }
    catch (err) {
        res.status(502).send(err);
    }
}

module.exports = {
    addAdmin,
    removeAdmin,
    listAdmins
}