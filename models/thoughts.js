const { Schema, model, isObjectIdOrHexString } = require('mongoose');
const reactionSchema = new Schema ({
    reactionId: {
        type: Objectid,
        default: New.Objectid,
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
        type: Date ,
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
        required: 'ture'
      },
      reactions: [reactionSchema,
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
        }
    ]
    });

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;