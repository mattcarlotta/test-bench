import promise from "bluebird";
import monitor from "pg-monitor";
import pgPromise from "pg-promise";

const initOptions = { promiseLib: promise }; // Database options
const pgp = pgPromise(initOptions); // initialize pg-promise w/options

const { NODE_ENV, DB, DBHOST, DBPASSWORD, DBPORT, DBUSER } = process.env; //

const dbConnection = () => {
	if (NODE_ENV === "development" && monitor.isAttached()) {
		monitor.detach();
		monitor.attach(initOptions, ["query", "error"]);
	} else {
		monitor.attach(initOptions, ["error"]);
	}

	return pgp({
		database: DB,
		host: DBHOST,
		password: DBPASSWORD,
		port: DBPORT,
		user: DBUSER,
	});
};

export default dbConnection();
