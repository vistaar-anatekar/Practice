const $ = require('jquery');
var structure = require("structure");
var sitemap = require('sitemap');
var currentChapter = require("chapter");
var nav = require("nav");
module.exports = function (scope) {
    // video code
    $(document).ready(function () {
        var timer = setInterval(function () {
            if ($("co-popup").hasClass("visible")) {
                let vi = document.getElementsByTagName('video')[0];
                vi.play();
                clearInterval(timer);
            }
        }, 1000)
        $('co-button.close-button').children().children().click(function (e) {
            // console.log("test");
            let vi = document.getElementsByTagName('video')[0];
            vi.pause();
            var timer = setInterval(function () {
                if ($("co-popup").hasClass("visible")) {
                    let vi = document.getElementsByTagName('video')[0];
                    vi.play();
                    clearInterval(timer);
                }
            }, 1000)
        });
    });
    //Open Chapter Menu on Click
    $('.skip').click(function () {
        $('.ref').show();
    });
    $('.brand-selector').click(function () {
        sitemap.open();
    });
    $('.ref-btn').click(function () {
        $('.ref-screen').show();
        $('.close-btn').show();
        $('#vaf,.vaf-overlay').show();
    });
    $('.api-btn').click(function () {
        $('.api-screen').show();
        $('.close-btn').show();
        $('#vaf,.vaf-overlay').show();
    });
    $('.close-btn,.ref-close-btn').click(function (e) {
        $('.api-screen').hide();
        $('.ref-screen').hide();
        $('.close-btn').hide();
        $('.ref-close-btn').hide();
        $('#vaf,.vaf-overlay').hide();
    });
    //Psych-1 Popup
    //popup1
    $('.popup-1').click(function () {
        $('.pop-1,.pop-close').show();
    });
    $('.pop-close').click(function () {
        $('.pop-1,.pop-close').hide();
    });
    //popup2
    $('.popup-2').click(function () {
        $('.pop-2,.pop-close').show();
    });
    $('.pop-close').click(function () {
        $('.pop-2,.pop-close').hide();
    });
    //popup3
    $('.popup-3').click(function () {
        $('.pop-3,.pop-close').show();
    });
    $('.pop-close').click(function () {
        $('.pop-3,.pop-close').hide();
    });
    //popup4
    $('.popup-4').click(function () {
        $('.pop-4,.pop-close').show();
    });
    $('.pop-close').click(function () {
        $('.pop-4,.pop-close').hide();
    });
    $('.ref-btn').click(function () {
        $('.ref-screen,.pop-close').show();
    });
    $('.close-btn-ivabit-ref-2').click(function () {
        $('.ref-screen,.pop-close').hide();
    });
    $('.api-btn').click(function () {
        $('.close-btn-api-2,.pop-close').show();
    });
    $('.ref-btn').click(function () {
        $('.close-btn-api-2,.pop-close').hide();
    });
    $('.close-btn-api-2').click(() => {
        $('.api-screen,.close-btn-api-2').hide();
    });
    $('.close-btn').click(() => {
        $('.api-screen').hide();
        $('.close-btn-img').hide();
    })
    $('.api-btn').click(() => {
        $('.close-btn').show();
    })
    $('.ref-btn').click(() => {
        $('.close-btn-img,.pop-close').hide();
    })
    $('.api-btn').click(() => {
        $('.close-btn-img').show();
    })
    $('.close-btn-img').click(() => {
        $('.api-screen').hide();
        $('.close-btn-img').hide();
        $('.close-btn').hide();
    })

    $('.api-btn').click(() => {
        $('.close-btn-api').show();
    })
    $('.close-btn-api').click(() => {
        $('.api-screen').hide();
        $('.close-btn-api').hide();
    })
};