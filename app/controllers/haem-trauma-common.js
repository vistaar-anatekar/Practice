const $ = require('jquery');
var structure = require("structure");
var currentChapter = require("chapter");
var nav = require("nav");
const common = require('./common');
module.exports = function (scope) {
    scope.common = new common();

    $('.hand-1').click(function () {
        $('.pop-1').show();
        $('.pop-1-close').show();
        $('#vaf,.vaf-overlay').show();
    });

    $('.pop-1-close').click(function (e) {
        $('.pop-1').hide();
        $('.pop-1-close').hide();
        $('#vaf,.vaf-overlay').hide();
    });

    $('.hand-2').click(function () {
        $('.pop-2').show();
        $('.pop-2-close').show();
        $('#vaf,.vaf-overlay').show();
    });

    $('.pop-2-close').click(function (e) {
        $('.pop-2').hide();
        $('.pop-2-close').hide();
        $('#vaf,.vaf-overlay').hide();
    });

    $('.dosage').click(function () {
        $('.pop-3').show();
        $('.pop-3-close').show();
        $('#vaf,.vaf-overlay').show();
    });

    $('.pop-3-close').click(function (e) {
        $('.pop-3').hide();
        $('.pop-3-close').hide();
        $('#vaf,.vaf-overlay').hide();
    });

    $('.popHand').click(function () {
        $('.pop_1').show();
        $('.pop-4-close').show();
        $('#vaf,.vaf-overlay').show();
    });

    $('.pop-4-close').click(function (e) {
        $('.pop_1').hide();
        $('.pop-4-close').hide();
        $('#vaf,.vaf-overlay').hide();
    });
}