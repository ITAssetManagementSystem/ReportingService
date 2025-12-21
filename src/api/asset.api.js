const axios = require("axios");

const baseUrl = process.env.ASSET_SERVICE_URL;

async function getAssets() {
    const res = await axios.get(`${baseUrl}/assets`);
    return res.data;
}

module.exports = { getAssets };
