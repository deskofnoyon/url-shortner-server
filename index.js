const app = require("./app");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const colors = require("colors");
const mongoose = require("mongoose");

// mongodb atlas cloude db url
const dbURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.lpsfjtz.mongodb.net/?retryWrites=true&w=majority`;

// mongodb compass url
const dbLocalURL = `mongodb://localhost:27017/${process.env.APP_NAME}`;

// Connect to the database asynchronously
mongoose
	.connect(dbLocalURL, {
		// useNewUrlParser: true,
		// useUnifiedTopology: true,
		// serverSelectionTimeoutMS: 5000,
		// autoIndex: false, // Don't build indexes
		// maxPoolSize: 10, // Maintain up to 10 socket connections
		// serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
		// socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
		family: 4, // Use IPv4, skip trying IPv6
	})
	.then(() => {
		console.log("Database connection successfull ✔".blue.bold);
	})
	.catch((error) => {
		console.error("Error connecting to the database:", error);
	});

app.listen(port, () => {
	console.log(
		`App is running on ${port}`.yellow.bold,
		`http://localhost:${port}`
	);
});
