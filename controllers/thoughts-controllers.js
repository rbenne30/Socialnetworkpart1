const { Thoughts } = require('../models');

const thoughtsController = {
  
  getallThoughts({ params, body }, res) {
    console.log(body);
    Thought.create(body)
      .then(({ _id }) => {
        console.log(_id)
      })
  }
};

  // remove comment
  removethought()
  removeReaction(req, res) {
    Thoughts.findOneAndUpdate(
      {_id:req.params.thoughtsId}, 
      {$pull: {reactions:  }}
  }
  


module.exports = thoughtsController;
