const express = require("express");
const router = express.Router();
const adminTasks = require("../controllers/admin.js");

// All admin tasks here

router.post("/add-event", adminTasks.addEvent);

router.patch("/edit-event", adminTasks.editEvent);

router.delete("/delete-event", adminTasks.deleteEvent);

module.exports = router;