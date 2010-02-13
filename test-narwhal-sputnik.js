
require("./isodate");
var ASSERT = require("assert");
var FS = require("file");

FS.path(module.path)
.dirname()
.globPaths("sputnik/**/*.js")
.forEach(function (path) {
    exports['test ' + path.from(module.path)] = function () {
        require.once(path, {
            "$ERROR": function () {
                ASSERT.ok(false, message);
            }
        });
    };
});

if (require.main == module)
    require("test").run(exports);

