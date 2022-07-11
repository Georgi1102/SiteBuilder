const express = require("express");
const api = require("./routes/api");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", api);

app.listen(port, "0.0.0.0", () => {
	console.log(`Example app listening on port ${port}`);
});