//require router from express
const router = require('express').Router();
//declare variables that require your different routes
const thoughtsRoutes = require('./thoughts');
const userRoutes = require('./user');

//make your router use the different routes THROUGH different 
//additional pieces of your entire endpoint url

//we want to have two different routes:
//localhost:3001/api/thoughts
//localhost:3001/api/user

//whatever route is using this line, slaps: /api at its end then try to use routes from thoughtsRoutes var
//btw, the whatever route was localhost:3001/api already
//so now this looks like localhost:3001/api/api
router.use('/thoughts', thoughtsRoutes);

//whatever route is using this line, slaps: /api at its end then try to use routes from userRoutes var
router.use('/user', userRoutes);



//export your router so that it can be used by whoever requires THIS file