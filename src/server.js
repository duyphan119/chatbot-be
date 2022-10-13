const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const cors = require("cors");
const { p } = require("./model_info");
const { trainNlp } = require("./train-nlp");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
console.log(p.length);
trainNlp();
app.listen(port, () => console.log(`Express server is listening on port ${port}`));
