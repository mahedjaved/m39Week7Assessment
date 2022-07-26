// setup schemas for netflix-cli app

// handle modules import
const mongoose = require("mongoose");

// movie schema
const movieSchema = new mongoose.Schema({
	title: { type: String, unique: true, required: true },
	actor: { type: String, default: "Not specified", required: false },
	director: { type: String, default: "Not specified", required: false },
	ratings: { type: String, default: "Not specified", required: false },
});

// tv schema
const tvSchema = new mongoose.Schema({
	title: { type: String, unique: true, required: true },
	actor: { type: String, default: "Not Specified", required: false },
	director: { type: String, default: "Not Specified", required: false },
	ratings: { type: String, default: "Not specified", required: false },
});

// instantiate the schemas
const Movie = mongoose.model("Movie", movieSchema);
const TV = mongoose.model("TV", tvSchema);

// handle exports
module.exports = { Movie, TV };
