// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();

// ---------------------------
// Foundation
// ---------------------------

$(document).foundation({
    topbar : {
        custom_back_text: true,
        back_text: 'zurück',
        mobile_show_parent_link: false
    },
    reveal : {
        animation: 'fadeAndPop',
        animation_speed: 200,
        css : {
            open : {
                'opacity': 0,
                'visibility': 'visible',
                'display': 'block'
            },
            close : {
                'opacity': 1,
                'visibility': 'hidden',
                'display': 'none'
            }
        }
    }
});

// ---------------------------
// Fittext
// ---------------------------

$( document ).ready(function() {
    if (matchMedia) {
        var mq = window.matchMedia(Foundation.media_queries['medium']);
        mq.addListener(WidthChange);
        WidthChange(mq);
    }

    function WidthChange(mq) {
        if (mq.matches) {
            
            // ----- MEDIUM UP -----
            $(".big-button h1").fitText(0.7, { minFontSize: '32px', maxFontSize: '44px' }); // Standard Foundation h1: 44px
            $(".cup-header-left h3").fitText(1, { minFontSize: '10px', maxFontSize: '27px' }); // Standard Foundation h1: 44px
            
        }
        else {
            
            // ----- SMALL -----
            $(".big-button h1").fitText(0.7, { minFontSize: '22px', maxFontSize: '34px' }); // Standard Foundation h1 at small: 34px
            
        }
    }
});