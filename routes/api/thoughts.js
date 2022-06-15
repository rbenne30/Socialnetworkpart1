const router = require('express').Router();
const{
    getAllThoughts,

} =require('../../controllers/thoughts-controllers');
const { route } = require('./user');
// Set up GET all and POST at /api/thoughts 

router.route('/')
.get(getAllThoughts)
//.post(createThoughts)

router.route('/:id')
//.get(getSingleThought)
// .put(updateThought)
// .delete(deleteThought)

router.route('/:thoughtId/reaction')

router.route('/:thoughtId/reaction/:reactionId')

module.exports =router