const reportingService = require("../services/reporting.service");
const logger = require("../utils/logger");

async function summary(req, res) {
    logger.log("Fetching summary report");
    res.json(await reportingService.getSummary());
}

async function assetUtilization(req, res) {
    logger.log("Fetching asset utilization");
    res.json(await reportingService.getAssetUtilization());
}

async function employeeAssets(req, res) {
    logger.log("Fetching employee asset mapping");
    res.json(await reportingService.getEmployeeAssets());
}

async function assignmentHistory(req, res) {
    logger.log("Fetching assignment history");
    res.json(await reportingService.getAssignmentHistory());
}

module.exports = {
    summary,
    assetUtilization,
    employeeAssets,
    assignmentHistory
};
