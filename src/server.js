require("dotenv").config();
const app = require("./app");
const logger = require("./utils/logger");

const port = process.env.PORT || 8083;

app.listen(port, () => {
    logger.log(`Reporting Service running on port ${port}`);
});
