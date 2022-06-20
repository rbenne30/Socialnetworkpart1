const { Thoughts, User } = require('../models');

const thoughtsController = {

  getAllThoughts(req, res) {
    Thoughts.find()
      .sort({ createdAt: -1 })
      .then((data) => {
        res.json(data)
          .catch(err => {
            res.status(500).json(err);
          });
      })
  },


  createThoughts({ body }, res) {
    Thoughts.create(body)
      .then((data) => {
        res.json(data)
        
          .catch(err => res.status(500).json(err));
      })
  },
  getSingleThought({ params }, res) {
    Thoughts.findOne({ _id: params.id })
      .then((data) => {
        if (!data) {
          res.status(500).json({ message: 'No thoughts found with this id!' })
          return;
        }
        res.json(data);

      })
      .catch(err => {
        res.status(500).json(err);
      });
  },
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(Data => {
        if (!Data) {
          res.status(500).json({ message: 'No new thoughts with this id!' });
          return;
        }
        res.json(Data);
      })
      .catch(err => res.status(500).json(err));
  },

  deleteThought({ params }, res) {
    Thoughts.findOneAndDelete({ _id: params.id })
      .then(Data => {
        if (!Data) {
          res.status(500).json({ message: 'No thoughts found with this id!' });
          return;
        }
        res.json(Data);
      })
      .catch(err => res.status(500).json(err));
  }


};


module.exports = thoughtsController;
