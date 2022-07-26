// this files sets all the CRUD operations for the tv database

const { __, TV } = require("../models/schemas");

// C (create) in CRUD
exports.createTVDB = async (tv) => {
	try {
		const newTV = await TV.create(tv);
		console.log(`Created a new tv database : ${newTV}`);
	} catch (error) {
		console.log(`Error ${error} while creating (C) tv database`);
	}
};
// R (read) in CRUD
exports.readTVDB = async (tv) => {
	try {
		// setup if else for all titles, director, actors and ratings
		if (tv.title) {
			const result = await TV.find({ title: tv.title });
			console.log(`Are you looking for the tv title : ${result}}`);
		} else if (tv.actor) {
			const result = await TV.find({ title: tv.actor });
			console.log(`Are you looking for the tv actor : ${result}}`);
		} else if (tv.director) {
			const result = await TV.find({ title: tv.director });
			console.log(`Are you looking for the tv director : ${result}}`);
		} else if (tv.ratings) {
			const result = await TV.find({ title: tv.ratings });
			console.log(`Are you looking for tv title with ratings : ${result}}`);
		}
	} catch (error) {
		console.log(
			`Error ${error} while reading (R) tv database, no tv ${tv.title} found`
		);
	}
};
// U (update) in CRUD
exports.updateTVDB = async (tv) => {
	try {
		const updatedResult = {
			actor: tv.newActor,
			director: tv.newDirector,
			ratings: tv.newRatings,
		};
		await TV.updateOne({ title: tv.title }, { $set: updatedResult });
		console.log(
			`The following changes have been made to your tv database : ${updatedResult}`
		);
	} catch (error) {
		console.log(`Error ${error} while updating (U) tv database`);
	}
};
// D (delete) in CRUD
exports.deleteTVDB = async (tv) => {
	try {
		const deletedItem = await TV.deleteOne({ title: tv.title });
		console.log(
			`The following tv item has been removed from your tv DB ${deletedItem}`
		);
	} catch (error) {
		console.log(`Error ${error} while deleting (D) items in tv database`);
	}
};
