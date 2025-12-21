const assetApi = require("../api/asset.api");
const employeeApi = require("../api/employee.api");
const assignmentApi = require("../api/assignment.api");

async function getSummary() {
    const [assets, employees, assignments] = await Promise.all([
        assetApi.getAssets(),
        employeeApi.getEmployees(),
        assignmentApi.getAssignments()
    ]);

    return {
        totalAssets: assets.length,
        totalEmployees: employees.length,
        totalAssignments: assignments.length
    };
}

async function getAssetUtilization() {
    const assets = await assetApi.getAssets();
    return assets.map(a => ({
        assetId: a.id,
        name: a.name,
        status: a.status
    }));
}

async function getEmployeeAssets() {
    const assignments = await assignmentApi.getAssignments();
    return assignments;
}

async function getAssignmentHistory() {
    return await assignmentApi.getAssignments();
}

module.exports = {
    getSummary,
    getAssetUtilization,
    getEmployeeAssets,
    getAssignmentHistory
};
