const router = require('express').Router();

const apiRoutes = require('./api');

//slaps a /api on whatever route exists prior to this file being required
//localhost:3001/api
router.use('/api', apiRoutes);


module.exports = router;
