const { Thoughts } = require('../models');

const thoughtsController = {
  
  getAllThoughts(req, res) {
    Thoughts.find()
    .sort({createdAt: -1})
    .then((data)=> {
      res.json(data)
    })
  }
};

  // remove comment
  // removethought()
  // removeReaction(req, res) {
  //   Thoughts.findOneAndUpdate(
  //     {_id:req.params.thoughtsId}, 
  //     {$pull: {reactions:  }}
  // }
  


module.exports = thoughtsController;
