const { Schema, Types, model } = require('mongoose');
const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.Objectid,
        default: () => new Types.Objectid,
    },
    reactionBody: {
        type: String,
        required: 'true',
        maxLength: 280
    },
    username: {
        type: String,
        required: 'true'
    },
    createdAt: {
        type: Date,
        default: Date.now, //supossed to be current time stamp 
    }
})
const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'true',
        midLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
        //USE GETTER METHOD TO FORMAT THE TIMESTAMP ON QUERY 
    },
    Username: {
        type: String,
        required: 'true'
    },
    reactions: [ReactionSchema, {
        type: Schema.Types.ObjectId,
        ref: "Reaction",
    }
    
    
    ]

},
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;