if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

exports.node = function () {
    return {
        "ip": process.env.NODE_IP || "localhost",
        "port": process.env.NODE_PORT || "50790"
    }
}
exports.storage = function () {
    return {
        "S3": process.env.S3_ENDPOINT || "localhost",
    }
}
