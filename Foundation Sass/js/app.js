// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();

/*global $, jQuery, enquire, Foundation*/

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
        animation: 'fade',
        animation_speed: 200
    }
});

// ---------------------------
// Other Custom
// ---------------------------

$(document).ready(function () {
    "use strict";
    enquire.register(Foundation.media_queries.medium, {
        match: function () {
            // ----- Fittext -----
            // Standard Foundation h1: 44px
            $(".big-button h1").fitText(0.7, { minFontSize: '32px', maxFontSize: '44px' });
            // Standard Foundation h3: 27px
            $(".cup-header-left h3").fitText(1, { minFontSize: '10px', maxFontSize: '27px' });
        }
    });
    enquire.register(Foundation.media_queries.small, {
        match: function () {
            // ----- Fittext -----
            // Standard Foundation h1 at small: 34px
            $(".big-button h1").fitText(0.7, { minFontSize: '22px', maxFontSize: '34px' });
        }
    });
});

$('.ch-section .modal-open').click(function () {
    "use strict";
    $('.ch-section .section-modal').css('top', $('.ch-section').offset().top);
    $('.ch-section .section-modal').modal();
});












