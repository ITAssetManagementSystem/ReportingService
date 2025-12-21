const axios = require("axios");

const baseUrl = process.env.ASSIGNMENT_SERVICE_URL;

async function getAssignments() {
    const res = await axios.get(`${baseUrl}/assignments`);
    return res.data;
}

module.exports = { getAssignments };
