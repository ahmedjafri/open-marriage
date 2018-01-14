var config = require('../config');

module.exports = function (req, res, next) {
    // Check if the current date is before the walima date.
    req.afterWalima = Date.now() > config.date;
    next();
};
