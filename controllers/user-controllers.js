const { User, Thoughts } = require("../models");
const UserController = {

    allUsers(req, res) {
        User.find({})
            .then((data) => res.json(data))
            .catch(err => {
                res.status(500).json(err);
            });
    },


    createUser({ body }, res) {
        User.create(body)
            .then((data) => {
                res.json(data)
            })
                    .catch(err => res.status(500).json(err));
    },
    getOneUser({ params }, res) {
        User.findOne({ _id: params.id })
            .then((data) => {
                if (!data) {
                    res.status(500).json({ message:'No users found with this id!'});
                    return;
                }
                res.json(data);

            })
            .catch(err => {
                res.status(500).json(err);
            });
    },

    updateUser({ params, body }, res) {
        console.log(req)
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(Data => {
                if (!Data) {
                    res.status(500).json({ message: 'No new user with this id!' });
                    return;
                }
                res.json(Data);
            })
            .catch(err => res.status(500).json(err));
    },

    removeUser({ params }, res) {
        User.findOneAndDelete ({_id: params.id})
            .then(Data => {
                if (!Data) {
                    res.status(500).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(Data);
            })
            .catch(err => res.status(500).json(err));
    }
}
module.exports = UserController





