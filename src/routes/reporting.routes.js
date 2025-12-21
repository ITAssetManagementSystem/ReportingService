const express = require("express");
const controller = require("../controllers/reporting.controller");

const router = express.Router();

router.get("/summary", controller.summary);
router.get("/assets/utilization", controller.assetUtilization);
router.get("/employees/assets", controller.employeeAssets);
router.get("/assignments/history", controller.assignmentHistory);

module.exports = router;
