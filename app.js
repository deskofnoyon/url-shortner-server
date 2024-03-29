const express = require("express");
const cors = require("cors");
const app = express();
const shortURLRoute = require("./routes/v1/url.route");
const userRoute = require("./routes/v1/user.route");

// swagger
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDoc = YAML.load("./swagger.yaml");

// middlewares
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("public"));

// actual routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/url", shortURLRoute);

// api docs
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// default routes

app.get("/health", (_req, res) => {
	res.status(200).json({
		health: "OK",
	});
});

app.get("/", (req, res) => {
	// console.log(req.path);
	res.status(200).render("index", {
		req,
		status: 200,
		statusMessage: "OK",
		protocol: "HTTP",
		contentType: "application/json",
		allow: "GET, HEAD, OPTIONS",
		url: req.protocol + "://" + req.get("host") + req.path,
	});
});

app.use("*", (req, res) => {
	// console.log(req.url);
	res.status(404).render("404");
});

module.exports = app;
