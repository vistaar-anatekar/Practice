//Globally Common Controller (Make Sure you Import this controller in required file)
const $ = require('jquery');
var structure = require("structure");
var currentChapter = require("chapter");
var nav = require("nav");



module.exports = function (scope) {

    $('.ref-btn').click(function (e) {
        $(".ref-screen").show();
        $(".close-btn").show();
    });

    $('.api-btn').click(function (e) {
        $(".api-screen").show();
        $(".close-btn").show();
        $("#vaf").show();
    });

    $('.close-btn').click(function (e) {
        $(".api-screen").hide();
        $(".ref-screen").hide();
        $(".close-btn").hide();
        $("#vaf").hide();
    });

    //Open Chapter Menu on Click
    $(document).on('click', '.hamburgerMenu', function () {
        $(this).toggleClass("change");
        $('#menu').toggleClass("active");
    });
    //for copopup video
    $(document).ready(function () {
        var timer = setInterval(function () {
            let vi = document.getElementsByTagName('video')[0];
            if ($("co-popup").hasClass("visible")) {
                vi.play();
                clearInterval(timer);
            }
        }, 1000)
        $('co-button.close-button').children().children().click(function (e) {
            let vi = document.getElementsByTagName('video')[0];
            vi.pause();
            var timer = setInterval(function () {
                if ($("co-popup").hasClass("visible")) {
                    let vi = document.getElementsByTagName('video')[0];
                    vi.play();
                    clearInterval(timer);
                }
            }, 1000);
        });
        if ((currentChapter.main.id).indexOf('-v') > 0) {
            var currentChapterID;
            currentChapterID = (currentChapter.main.id).split('-v')[0];
            $("[data-chapter=" + currentChapterID + "]").addClass('active').attr('class-active', 'true');
            $("ul.nav").attr('label', currentChapterID);
        }
    });



    // Dynamically Knowing Next Chapter and Moving into It
    if ($('.lockedSlide').length > 0) {
        // Get Current Chapter ID
        var currentChapterId;
        if ((currentChapter.main.id).indexOf('-v') > 0) {
            currentChapterId = (currentChapter.main.id).split('-v')[0];
        } else {
            currentChapterId = currentChapter.main.id;
        }
        console.log('Current Chapter : ' + currentChapterId);

        // Get Next Chapter ID
        var nextChapterId, nextKey;
        for (var key in structure.storyboard) {
            if (structure.storyboard[key] == currentChapterId) {
                nextKey = (parseInt(key) + 1).toString();
                nextChapterId = structure.storyboard[nextKey];
                break;
            }
        }
        console.log('Next Chapter : ' + nextChapterId);

        // Move to Next Chapters First Slide
        $(document).on("swipeleft", function (event) {
            nav.goto({
                chapter: nextChapterId
            });
        });
    }
};