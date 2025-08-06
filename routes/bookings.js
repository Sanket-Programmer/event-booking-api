const express = require("express");
const Booking = require("../models/Booking");
const Event = require("../models/Event");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/:eventId", auth, async (req, res) => {
  const event = await Event.findById(req.params.eventId);
  if (!event || event.booked >= event.capacity)
    return res.status(400).json({ error: "Event full or not found" });

  const booking = new Booking({ user: req.user.id, event: event._id });
  await booking.save();

  event.booked += 1;
  await event.save();

  res.status(201).json({message: "Event Booked Successfully !!!", bookingDetails: booking});
});

router.delete("/:bookingId", auth, async (req, res) => {
  const booking = await Booking.findOneAndDelete({ _id: req.params.bookingId, user: req.user.id });
  if (!booking) return res.status(404).json({ error: "Booking not found" });

  await Event.findByIdAndUpdate(booking.event, { $inc: { booked: -1 } });
  res.json({ message: "Booking canceled" });
});

router.get("/", auth, async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate("event");
  res.json(bookings);
});

module.exports = router;
