const router = require('express').Router();

// Set up GET all and POST at /api/thoughts 

router.get('/',thoughts(req,res))
router.post();