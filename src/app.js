// handle imports
require("./connection/connection"); // connecting to DB
const yargs = require("yargs");
const mongoose = require("mongoose"); // for mongoose ops
const movieCrudOps = require("./crudops/movie_crud");
const tvCrudOps = require("./crudops/tv_crud");

// the main app
const app = async (yArgs) => {
	// ----------------------MOVIE------------------------------- //

	if (yArgs.createMov) {
		await movieCrudOps.createMovieDB({
			title: yArgs.title,
			actor: yArgs.actor,
			director: yArgs.director,
			ratings: yArgs.ratings,
		});
	} else if (yArgs.readMov) {
		await movieCrudOps.readMovieDB({
			title: yArgs.title,
			actor: yArgs.actor,
			director: yArgs.director,
			ratings: yArgs.ratings,
		});
	} else if (yArgs.updateMov) {
		await movieCrudOps.updateMovieDB({
			title: yArgs.title,
			actor: yArgs.actor,
			director: yArgs.director,
			ratings: yArgs.ratings,
			newTitle: yArgs.newTitle,
			newActor: yArgs.newActor,
			newDirector: yArgs.newDirector,
			newRatings: yArgs.newRatings,
		});
	} else if (yArgs.deleteMov) {
		await movieCrudOps.deleteMovieDB({ title: yArgs.title });
	}

	// --------------------------TV----------------------------------- //
	else if (yArgs.createTv) {
		await tvCrudOps.createTVDB({
			title: yArgs.title,
			actor: yArgs.actor,
			director: yArgs.director,
			ratings: yArgs.ratings,
		});
	} else if (yArgs.readTv) {
		await tvCrudOps.readTVDB({
			title: yArgs.title,
			actor: yArgs.actor,
			director: yArgs.director,
			ratings: yArgs.ratings,
		});
	} else if (yArgs.updateTv) {
		await tvCrudOps.updateTVDB({
			title: yArgs.title,
			actor: yArgs.actor,
			director: yArgs.director,
			ratings: yArgs.ratings,
			newTitle: yArgs.newTitle,
			newActor: yArgs.newActor,
			newDirector: yArgs.newDirector,
			newRatings: yArgs.newRatings,
		});
	} else if (yArgs.deleteTv) {
		await tvCrudOps.deleteTVDB({ title: yArgs.title });
	} else {
		console.log("Unidentified command");
	}
	// stop the client from continious access to db
	await mongoose.disconnect();
};

app(yargs.argv);
