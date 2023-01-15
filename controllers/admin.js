// as all are DB operations hence will require async await, so async func
const event = require("../models/Event.js");

async function addEvent(req, res) {
  const newEvent = new event({
    name: req.body.name,
    description: req.body.description,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    posterURL: req.body.posterURL,
  });
  try {
    const savedEvent = await newEvent.save();
    res.send(savedEvent);
  } catch (err) {
    res.status(502).send(err);
  }
}

async function editEvent(req, res) {
  const id = req.body.id;
  const updatedEvent = req.body;
  try{
    const editEvent = await event.findByIdAndUpdate(id, updatedEvent, {new: true});
    if(!editEvent) res.status(404).send("Event not found");
    else res.send(editEvent);
  } catch (err) {
    res.status(502).send(err);
  }
}

async function deleteEvent(req, res) {
  const id = req.body.id;
  try {
    const deletedEvent = await event.findByIdAndDelete(id);
    if(!deletedEvent) res.status(404).send("Event not found");
    else res.send(deletedEvent);
  }
  catch (err) {
    res.status
  }
}

async function getEvents(req, res) {
  try {
    const events = await event.find({
      endDate: {
        $gte: new Date() // The events should be ongoing or yet to be started
      }
    }).sort({startDate: 1}); // Sort the events by start date
    res.send(events);
  }
  catch (err) {
    res.status
  }
}

module.exports = {
  addEvent,
  editEvent,
  deleteEvent,
  getEvents
}