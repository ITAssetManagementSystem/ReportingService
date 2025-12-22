const express = require("express");
const reportingRoutes = require("./routes/reporting.routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => res.send("OK"));
app.use("/reports", reportingRoutes);

module.exports = app;
