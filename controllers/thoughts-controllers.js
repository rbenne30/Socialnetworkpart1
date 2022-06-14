const { Thoughts } = require('../models');

const thoughtsController = {
  
  addThoughts({ params, body }, res) {
    console.log(body);
    Thought.create(body)
      .then(({ _id }) => {
        console.log(_id)
      })
  }
};

  // remove comment
  removethought()

  


module.exports = thoughtsController;
