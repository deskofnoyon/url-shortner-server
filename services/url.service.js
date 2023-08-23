const URL = require("../models/URL");

// Function to generate a unique short code
function generateShortCode() {
	const length = 6;
	const characters =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let code = "";

	for (let i = 0; i < length; i++) {
		code += characters[Math.floor(Math.random() * characters.length)];
	}

	return code;
}

exports.generateShortUrl = async (urlInfo) => {
	const longURL = urlInfo.longURL;
	const existingURL = await URL.findOne({ longURL });
	if (existingURL) {
		return existingURL.shortURL;
	}
	const shortCode = await generateShortCode();
	const shortURL = `https://short-url-shortner.web.app/${shortCode}`; // Adjust the domain accordingly
	const result = await URL.create({
		...urlInfo,
		shortCode,
		shortURL,
	});
	return result;
};

exports.getURLService = async (urlId) => {
	const url = await URL.findOne({ shortURLCode: urlId });
	if (!url) {
		return false;
	}
	return url;
};
