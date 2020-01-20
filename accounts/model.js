const DB = require("../data/dbConfig");

const getAll = () => {
	// SELECT * FROM accounts
	return DB("accounts");
};

const insert = ({ name, budget }) => {
	// INSERT INTO accounts (col1, col2) VALUES ("val1", "val2")
	return DB("accounts").insert({
		name,
		budget
	});
};

const deleteEntry = id => {
	return DB("accounts")
		.where({ id })
		.delete();
};

const update = ({ id, accountInfo }) => {
	return DB("accounts")
		.where({ id })
		.update(accountInfo);
};

module.exports = {
	getAll,
	insert,
	deleteEntry,
	update
};
