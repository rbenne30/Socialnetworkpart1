const router = require('express').Router();

//require {getAllUsers, createUser ...} from the controller file exporting those functions

//one way to approach this could be to have the controllers folder have an index.js
//that exports the functionalities for THIS file to use. The index.js inside controllers could
//export the functionalities that it itself requires from its sibling files 
//(maybe thoughts-controller.js and user-controller.js)

// Set up GET all and POST at /api/users
  router.get('/', function (req, res) {
    res.send ('Get all users')
  })//Tries to GET all users back to the requester
  router.get('/user/:id', function  (req, res) {
    res.send(req.params);
  })
  router.post('/api/users/:userId/friends/:friendId',(req, res)=> {
    res.send('Add a new user')
  })
  router.delete('/user', (req,res)=>{
     res.send('Got a DELETE request from user')
  })//is this necessary? What exactly would this do for THIS route?


// Set up GET one, PUT, and DELETE at /api/users/:userId/friends/:friendId


module.exports = router;
