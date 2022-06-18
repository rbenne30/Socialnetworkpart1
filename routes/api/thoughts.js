const router = require('express').Router();
const{
    getAllThoughts,createThoughts,getSingleThought,updateThought,deleteThought

} =require('../../controllers/thoughts-controllers');

// Set up GET all and POST at /api/thoughts 

router.route('/')
.get(getAllThoughts)
.post(createThoughts)

router.route('/:id')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought)


router.route('/:thoughtId/reactions')
.post(createThoughts)
.delete(deleteThought)

module.exports =router