const express = require ("express");
const Event = require ("../models/Event");
const auth = require ("../middleware/auth");
const isAdmin = require ("../middleware/role");

const router = express.Router();

router.post("/", auth, isAdmin("admin"), async (req,res) => {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json({message: "Event Added Succesfully !!!", event: event});
});

router.put("/:id", auth, isAdmin("admin"), async (req,res) => {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(201).json({message: "Updated Succesfully !!!", updatedEvent: event});
});

router.delete("/:id", auth, isAdmin("admin"), async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Event Succesfully !!!" });
});

router.get("/", auth, async (req,res) => {
    const events = await Event.find({});
    res.status(201).json(events);
});

module.exports = router;