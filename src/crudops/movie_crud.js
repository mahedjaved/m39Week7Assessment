// this files sets all the CRUD operations for the movie database

const { Movie, __ } = require("../models/schemas");

// C (create) in CRUD
exports.createMovieDB = async (movie) => {
	try {
		const newMovie = await Movie.create(movie);
		console.log(`Created a new movie title in movie database : ${newMovie}`);
	} catch (error) {
		console.log(`Error ${error} while creating (C) movie database`);
	}
};
// R (read) in CRUD
exports.readMovieDB = async (movie) => {
	try {
		// setup if else for all movies, director, actors and ratings
		if (movie.title) {
			const result = await Movie.find({ title: movie.title });
			console.log(`Are you looking for the movie : ${result}}`);
		} else if (movie.actor) {
			const result = await Movie.find({ title: movie.actor });
			console.log(`Are you looking for the actor : ${result}}`);
		} else if (movie.director) {
			const result = await Movie.find({ title: movie.director });
			console.log(`Are you looking for the director : ${result}}`);
		} else if (movie.ratings) {
			const result = await Movie.find({ title: movie.ratings });
			console.log(`Are you looking for movie with ratings : ${result}}`);
		}
	} catch (error) {
		console.log(
			`Error ${error} while reading (R) movie database, no movie ${movie.title} found`
		);
	}
};
// U (update) in CRUD
exports.updateMovieDB = async (movie) => {
	try {
		const updatedResult = {
			// not allowed to change the title --> [n.b] possible stretch ???
			actor: movie.newActor,
			director: movie.newDirector,
			ratings: movie.newRatings,
		};
		// not allowed to change the title --> [n.b] possible stretch ???
		await Movie.updateOne({ title: movie.title }, { $set: updatedResult });
		console.log(
			`The following changes have been made to your movie DB : ${updatedResult}`
		);
	} catch (error) {
		console.log(`Error ${error} while updating (U) movie database`);
	}
};
// D (delete) in CRUD
exports.deleteMovieDB = async (movie) => {
	try {
		const deletedItem = await Movie.deleteOne({ title: movie.title });
		console.log(
			`The following movie item has been removed from your movie DB ${deletedItem}`
		);
	} catch (error) {
		console.log(`Error ${error} while deleting (D) items in movie database`);
	}
};
