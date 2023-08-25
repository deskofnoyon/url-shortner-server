const User = require("../models/User");

exports.createUserService = async (userInfo) => {
	try {
		const user = await User.create(userInfo);
		return user;
	} catch (error) {
		return error;
	}
};

exports.getUserService = async () => {
	const users = await User.find({});
	return users;
};
