const $ = require('jquery');
var structure = require("structure");
var currentChapter = require("chapter");
var nav = require("nav");
const common = require('./common');
module.exports = function (scope) {
    scope.common = new common();

    setTimeout(() => {
        $(".packshot").addClass("swing").css("display", "block").css("opacity", "1");
    }, 1000);
}

