const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

router.get("/bear", (req, res) => {
	const queryText = 'SELECT "photos".imagefiles FROM "photos" AS smiles';
	pool
		.query(queryText)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			console.log("Error completing SELECT photos query", err);
			res.sendStatus(500);
		});
});

module.exports = router;
