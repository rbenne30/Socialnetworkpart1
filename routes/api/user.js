const router = require('express').Router();
const{
  allUsers,createUser,getOneUser,updateUser,removeUser

} =require('../../controllers/user-controllers');

//require {getAllUsers, createUser ...} from the controller file exporting those functions

//one way to approach this could be to have the controllers folder have an index.js
//that exports the functionalities for THIS file to use. The index.js inside controllers could
//export the functionalities that it itself requires from its sibling files 
//(maybe thoughts-controller.js and user-controller.js)

// Set up GET all and POST at /api/users
  router.route('/')
  .get(allUsers) 
  .post(createUser)
  
  
  router.route('/:id')
  .get(getOneUser)
  .put(updateUser)
  .delete(removeUser)

router.route('/:userId/friends')

router.route('/userId/friends/:friendsId')

module.exports = router;
