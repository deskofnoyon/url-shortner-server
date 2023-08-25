const {
	generateShortUrl,
	getURLByShortCodeService,
	getUrlsByUserEmailService,
} = require("../services/url.service");

exports.createShortURl = async (req, res) => {
	try {
		const urlInfo = req.body;
		const result = await generateShortUrl(urlInfo);
		res.status(200).json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: "fail",
			error,
		});
	}
};

exports.getUrlsByUserEmail = async (req, res) => {
	try {
		const { email } = req.params;
		const result = await getUrlsByUserEmailService(email);
		if (!result) {
			res.status(404).json({
				status: false,
				msg: "User not found!",
			});
		} else {
			res.status(200).json({
				status: true,
				data: result,
			});
		}
	} catch (error) {
		res.status(500).json({
			status: "fail",
			error,
		});
	}
};

exports.getURLByShortCode = async (req, res) => {
	try {
		const { urlShortId } = req.params;
		const result = await getURLByShortCodeService(urlShortId);
		if (!result) {
			res.status(404).json({
				status: false,
				message: "URL not found!",
			});
		} else {
			res.status(200).json(result);
		}
	} catch (error) {
		res.status(500).json({
			status: "fail",
			error,
		});
	}
};
