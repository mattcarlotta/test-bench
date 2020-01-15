import isEmpty from "lodash/isEmpty";

/**
 * Helper function to parse a fields' [name]: value from an array into an object.
 *
 * @function
 * @param {array} fields - an array containing fields.
 * @returns {object} - parsed fields with [name]: value.
 * @throws {error}
 */
export default fields => {
	try {
		if (isEmpty(fields)) throw new Error("You must supply an array of fields!");

		const parsedFields = fields.reduce((acc, { name, value }) => {
			acc[name] = value;
			return acc;
		}, {});

		return parsedFields;
	} catch (err) {
		return err.toString();
	}
};
