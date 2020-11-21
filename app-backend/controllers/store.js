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

//search route
store.get('/searchName/:text', async (req,res) => {
    
    await Merch.find({"name": req.params.text}, (err, targetMerch) => {
        if(err){
            res.status(400).json({ err: err.message})
        }
        console.log('Searched Merch:', targetMerch )
        res.status(200).send(targetMerch)
    } )
})

//show route
//use this route to return the target object
store.get('/:id', (req,res) => {
    Merch.findById(req.params.id, (err, targetMerch) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        console.log('Target Merch:', targetMerch )
        res.status(200).json(targetMerch)
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

//buy button
store.put('/:id/buy', async (req,res) => {
    try{
        const updatedMerch = await Merch.findByIdAndUpdate(req.params.id,
            {
                $inc: {quantity: -1}
            },
            {new: true}
        )
        console.log(updatedMerch)
    }catch(err) {
        console.log(err)
    }
})





module.exports = store
