var ObjectId = require('mongoose-simpledb').Types.ObjectId

exports.schema = {
  id: { type: ObjectId },
  placeName: { type: String },
  timeVisited: { type: Date },
  latitude: { type: String },
  longitude: { type: String }
}
