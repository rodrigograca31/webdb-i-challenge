const express = require("express");

const { getAll, insert, deleteEntry, update } = require("./model");
const router = express.Router();

// /api/accounts
router.get("/", (req, res) => {
	getAll()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			res.status(200).json(err);
		});
});

router.post("/", (req, res) => {
	insert(req.body)
		.then(result => {
			if (result) {
				res.status(200).json(result);
			}
		})
		.catch(err => {});
});

router.put("/:id", (req, res) => {
	update({ id: req.params.id, accountInfo: req.body })
		.then(result => {
			if (result) {
				res.status(200).json(result);
			} else {
				res.status(404).json(result);
			}
		})
		.catch(err => {
			rest.status(500).json({ err: err.message });
		});
});

router.delete("/:id", (req, res) => {
	deleteEntry(req.params.id)
		.then(result => {
			if (result) {
				res.status(200).json(result);
			} else {
				res.status(404).json(result);
			}
		})
		.catch(err => {});
});

module.exports = router;
