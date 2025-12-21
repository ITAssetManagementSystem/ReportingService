const axios = require("axios");

const baseUrl = process.env.EMPLOYEE_SERVICE_URL;

async function getEmployees() {
    const res = await axios.get(`${baseUrl}/employees`);
    return res.data;
}

module.exports = { getEmployees };
