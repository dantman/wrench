
require("./isodate");
var ASSERT = require("assert");

var $ERROR = function (messgae) {
    ASSERT.ok(false, message);
}

exports.testReflexiveParseFormat = function () {
    var IsoDate = "2010-01-01T00:00:00.000Z";
    ASSERT.equal(IsoDate, new Date(Date.parse(IsoDate)).toISOString());
};

if (require.main == module)
    require("test").run(exports);

