const {
	createUserService,
	getUserService,
} = require("../services/user.service");

exports.createUser = async (req, res) => {
	try {
		const userInfo = req.body;
		const result = await createUserService(userInfo);
		res.json(result);
	} catch (error) {
		res.status(500).json({
			status: "fail",
			error,
		});
	}
};

exports.getUser = async (req, res) => {
	try {
		const result = await getUserService();
		res.status(200).json({
			status: true,
			data: result,
		});
	} catch (error) {
		res.status(500).json({
			status: "fail",
			error,
		});
	}
};
