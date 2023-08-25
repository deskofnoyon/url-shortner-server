const URL = require("../models/URL");
const User = require("../models/User");

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
	try {
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
	} catch (error) {
		return error;
	}
};

exports.getUrlsByUserEmailService = async (email) => {
	const user = await User.findOne({email})
	if (!user) {
		return false;
	}
	const userUrls = await URL.find({ user: user._id });
	return userUrls;
};

exports.getURLByShortCodeService = async (shortCode) => {
	const url = await URL.findOne({ shortCode });
	if (!url) {
		return false;
	}
	return url;
};
