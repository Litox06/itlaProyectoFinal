const express = require("express");
const locationSchema = require("../models/location.js");
const router = express.Router();

//Create locaation
router.post("/locations", (req, res) => {
  const location = locationSchema(req.body);
  location
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get all locations
router.get("/locations", (req, res) => {
  locationSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Get location by
router.get("/locations/:id", (req, res) => {
  const { id } = req.params;
  locationSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Update location
router.put("/locations/:id", (req, res) => {
  const { id } = req.params;
  const { latitud, longitud, material } = req.body;
  locationSchema
    .updateOne({ _id: id }, { $set: { latitud, longitud, material } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Delete location
router.delete("/locations/:id", (req, res) => {
  const { id } = req.params;
  locationSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
