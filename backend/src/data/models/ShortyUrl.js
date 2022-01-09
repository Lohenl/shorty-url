const mongoose = require('../clients/mongoose-client');

const { Schema } = mongoose;

// reference: https://www.youtube.com/watch?v=JQDHz72OA3c&ab_channel=TechDummiesNarendraL

const shortyUrlSchema = new Schema({
  shortUrl: { type: String, unique: true },
  longUrl: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ShortyUrl', shortyUrlSchema);
