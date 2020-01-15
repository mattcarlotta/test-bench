import isEmpty from "lodash/isEmpty";

/**
 * Helper function to validate form fields.
 *
 * @function
 * @param {array} fields - an array containing fields.
 * @returns {object} - validated fields and number of errors.
 * @throws {error}
 */
export default fields => {
	try {
		if (isEmpty(fields)) throw new Error("You must supply an array of fields!");
		let errorCount = null;

		const validatedFields = fields.map(field => {
			let errors = "";
			const { name, value, required } = field;
			if ((!value && required) || (isEmpty(value) && required)) {
				errors = "Required";
			} else {
				if (
					(name === "email" || name === "authorizedEmail") &&
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(field.value)
				)
					errors = "Invalid email";

				if (name === "password" && value.length < 5)
					errors = "Password too short";
			}

			if (errors) errorCount += 1;

			return { ...field, errors };
		});

		return { validatedFields, errors: errorCount };
	} catch (err) {
		return err.toString();
	}
};
