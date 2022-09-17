import express from "express";
import mongoose from "mongoose";
import Memory from "../db/memoryModel.js";

const router = express.Router()

//Get all memories
router.get('/', async (req, res) => {
    try {
        const memories = await Memory.find()
        res.status(200).json(memories)
    } catch (e) {
        res.status(404).json({message: e.message})
    }
})

//Get single memory
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        if (!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({message: 'Memory id is not valid.'})

        const memory = await Memory.findById(id)

        if (!memory) return

        res.status(200).json(memory)
    } catch (e) {
        res.status(400).json({message: e.message})
    }

})

//Create a memory
router.post('/', async (req, res) => {
    try {
        const memory = req.body
        const createdMemory = await Memory.create(memory)

        res.status(201).json(createdMemory)

    } catch (e) {
        console.log(e.message)
        res.json({message: 'Create memory error'})
    }
})

//Update memory
router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params
        if (!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({message: 'Memory id is not valid.'})

        const {title, content, creator, image} = req.body
        const updatedMemory = await Memory.findByIdAndUpdate(id, {title, content, creator, image, _id: id}, {new: true})

        res.status(200).json(updatedMemory)

    } catch (e) {
        console.log(e.message)
        res.status(500).json({message: 'Update failed'})
    }
})

//Delete memory
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        if (!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({message: 'Memory id is not valid.'})

        const deletedMemory = await Memory.findByIdAndDelete(id)

        if (deletedMemory)
            res.status(200).json({message: 'Memory deleted'})

    } catch (e) {
        console.log(e.message)
        res.status(500).json({message: 'Delete failed'})
    }
})

export default router