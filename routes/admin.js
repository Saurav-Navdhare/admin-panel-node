const express = require("express");
const router = express.Router();
const adminTasks = require("../controllers/admin.js");

// All admin tasks here

router.post("/event", adminTasks.addEvent)
      .patch("/event", adminTasks.editEvent)
      .delete("/event", adminTasks.deleteEvent);
      
router.get("/events", adminTasks.getEvents);

module.exports = router;