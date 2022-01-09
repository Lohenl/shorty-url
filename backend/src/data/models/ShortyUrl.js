const mongoose = require('mongoose')
const Schema = mongoose.Schema

// reference: https://www.youtube.com/watch?v=JQDHz72OA3c&ab_channel=TechDummiesNarendraL

const shortyUrlSchema = new Schema({
    shortUrl: { type: String, unique: true },
    longUrl: String, 
    createdAt: { type: Date, default: Date.now },
    expiresAt: Date // not sure if this is needed, might just use TTL
});

module.exports = mongoose.model('ShortyUrl', shortyUrlSchema);