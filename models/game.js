var mongoose = require('mongoose');

var WordSchema = mongoose.Schema({
	word:String,
	color:String,
	clicked:Boolean
});

var PlayerSchema = mongoose.Schema({
	user:mongoose.Schema.Types.ObjectId,
	role:String
});

var GameSchema = mongoose.Schema({
  played: Date,
  createdBy: mongoose.Schema.Types.ObjectId,
  blueLeader: PlayerSchema,
  redLeader: PlayerSchema,
  words:[WordSchema]
});

module.exports = mongoose.model('Game', GameSchema);
