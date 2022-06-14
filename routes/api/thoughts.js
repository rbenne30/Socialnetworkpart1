const router = require('express').Router();

// Set up GET all and POST at /api/thoughts 

router.route('/')
router.get(getAllThoughts);
router.post(createThoughts);
router.post('/thought/:id')
router.put('updateThought')
router.delete('/delete/:id')