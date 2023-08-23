const { mongoose } = require("mongoose");

const urlSchema = mongoose.Schema(
	{
		longURL: {
			type: String,
			trim: true,
			required: [true, "url is required"],
		},
		shortURLCode: {
			type: String,
		},
		shortURL: {
			type: String,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User", // Reference to the User model
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const URL = mongoose.model("URl", urlSchema);
module.exports = URL;
