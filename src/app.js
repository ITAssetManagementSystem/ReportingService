const express = require("express");
const reportingRoutes = require("./routes/reporting.routes");

const app = express();
app.use(express.json());

app.get("/health", (_, res) => res.send("OK"));
app.use("/reports", reportingRoutes);

module.exports = app;
