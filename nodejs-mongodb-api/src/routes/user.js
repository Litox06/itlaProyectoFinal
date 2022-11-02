const express = require('express')
const userSchema = require('../models/user.js')
const router = express.Router()

//Create user
router.post('/users', (req, res)=>{
    const user = userSchema(req.body)
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
})

//Get all users
router.get('/users', (req, res)=>{
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
})

//Get user by 
router.get('/users/:id', (req, res)=>{
    const { id } = req.params
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
})

//Update user 
router.put('/users/:id', (req, res)=>{
    const { id } = req.params
    const { email, cedula, contrasena } = req.body
    userSchema
        .updateOne({_id: id }, { $set: {email, cedula, contrasena }} )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
})

//Update user 
router.delete('/users/:id', (req, res)=>{
    const { id } = req.params
    userSchema
        .deleteOne({_id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
})

module.exports = router