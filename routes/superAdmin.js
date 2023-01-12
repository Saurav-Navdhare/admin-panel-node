const express = require("express");
const router = express.Router();
const superAdminTasks = require("../controllers/superAdmin.js");

router.use("/", require("./admin.js")); //imported all admin tasks

router.post("/add-admin", superAdminTasks.addAdmin);

router.delete("/remove-admin", superAdminTasks.removeAdmin);

router.get("/list-admins", superAdminTasks.listAdmins);


module.exports = router;