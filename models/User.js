const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		firstName: {
			type: String,
			required: [true, "Firstname is required"],
		},
		lastName: {
			type: String,
		},
		profileImg: {
			Type: String,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);
module.exports = User;
