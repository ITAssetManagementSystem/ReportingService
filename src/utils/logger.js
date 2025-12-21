function log(message, meta = {}) {
    console.log(JSON.stringify({
        level: "INFO",
        message,
        ...meta,
        timestamp: new Date().toISOString()
    }));
}

function error(message, meta = {}) {
    console.error(JSON.stringify({
        level: "ERROR",
        message,
        ...meta,
        timestamp: new Date().toISOString()
    }));
}

module.exports = { log, error };
