import get from "lodash/get";

/**
 * Helper function to parse a cookie from an API request.
 *
 * @function parseCookie
 * @param {array} req - an API request.
 * @returns {string} - a string cookie from req.headers.cookie.
 */
export function parseCookie(req) {
	const cookie = get(req, ["headers", "cookie"]);
	return cookie ? { headers: { cookie } } : undefined;
}

/**
 * Helper function to parse a message from an API response.
 *
 * @function
 * @param {array} res - an API response.
 * @returns {string} - a parsed message string from res.data.message.
 */
export function parseMessage(res) {
	return get(res, ["data", "message"]);
}

/**
 * Helper function to parse data from an API response.
 *
 * @function
 * @param {array} res - an API response.
 * @returns {object} - a parsed data object from res.data.
 */
export function parseData(res) {
	return get(res, ["data"]);
}
