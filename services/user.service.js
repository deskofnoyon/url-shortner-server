const User = require("../models/User");

exports.createUserService = async (userInfo) => {
	const user = await User.create(userInfo);
	return user;
};

exports.getUserByEmailService = async (email) => {
	const user = await User.find({ email: email });
	return user;
};
