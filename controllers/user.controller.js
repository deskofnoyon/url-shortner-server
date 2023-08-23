const { createUserService } = require("../services/user.service");

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
