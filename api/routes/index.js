const express = require('express');
const router = express.Router();
const Note = require('../models//note.model');

router.post('/addNotes', (req,res)=>{
    const newNote = {
        title: req.body.title,
        description: req.body.description,
    };
     Note.create(newNote);
})

module.exports = router;