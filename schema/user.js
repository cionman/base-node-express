'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;
const { encryptAES256, decryptAES256 } = require('../common/util/crypto.util');
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        set: v => encryptAES256(v),
        get: decryptAES256
    },
    age: {
        type: Number,
        required: true,
    },
    married: {
        type: Boolean,
        required: true,
    },
    phone: {
        type: String,
        set: v => encryptAES256(v),
        get: decryptAES256
    },
    comment: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { toJSON: { getters: true } }); // getter 변환을 하는경우 json을 명시적으로 true로 해줘야 한다.

module.exports = mongoose.model('User', userSchema);
