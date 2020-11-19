const express = require('express')
const store =  express.Router()
const Merch = require('../models/merch')

//index route
store.get('/', (req,res) => {
    Merch.find({}, (err, foundMerch) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('Merch:', foundMerch)
        res.status(200).send(foundMerch)
    })
})

//delete route
store.delete('/:id', (req,res) => {
    Merch.findByIdAndRemove( req.params.id, (err ,deletedMerch) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('Deleted Merch:', deletedMerch )
        res.status(200).send(deletedMerch)
    })
})

//create route
store.post('/', async (req,res) => {
    Merch.create( req.body, (err, createdMerch) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('Merch Created:', createdMerch )
        res.status(200).send(createdMerch)
    })
})

//update route
store.put('/:id', (req,res) => {
    Merch.findOneAndUpdate( req.params.id, req.body, {new: true}, (err, updatedMerch) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        console.log('Updated Merch:', updatedMerch )
        res.status(200).json(updatedMerch)
    })
})





module.exports = store
