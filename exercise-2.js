var _ = require("lodash");

var worker = function(article) {
    return _.sortBy(article, 'quantity').reverse();
};

module.exports = worker;
