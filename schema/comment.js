'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose
const {Types: { ObjectId}} = Schema
const commentSchema = new Schema({
    commenter: {
        type: ObjectId, // populate 기능을 통해 join과 비슷한 역할을 한다.
        required: true,
        ref: 'User',
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model('Comment', commentSchema)

