// This file setups the connection to the MongoDB database of movies

// handling imports
require("dotenv").config(); // import dotenv
const mongoose = require("mongoose"); // import mongoose

// setup an async type function for connecting to online DB
const connection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log("[info] Successfull connection ...");
	} catch (error) {
		console.log(error);
	}
};

connection();
