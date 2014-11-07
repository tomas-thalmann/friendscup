// Author: Sebastian Thaler
// Email: sebi.thaler@gmail.com

/*global $, jQuery, enquire, Foundation*/

// ---------------------------
// Foundation Configuration
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
// jQuery document ready
// ---------------------------

$(document).ready(function () {
    "use strict";
    
    // ---------------------------
    // Bugfixes
    // ---------------------------
    
    // fix: form dropdown not clickable on mobile devices (needclick -> fastclick.js class)
    $('select').addClass('needsclick');
    
    // ---------------------------
    // Detail View - Modal
    // ---------------------------
    
    $('.modal-open').click(function () {
        $('#' + $(this).data('sectionmodalid')).css('top', $(this).closest('.cup-section').offset().top);
        $('#' + $(this).data('sectionmodalid')).modal();
    });
    
    // ---------------------------
    // Media Queries
    // ---------------------------
    
    enquire.register(Foundation.media_queries.medium, {
        match: function () {
            
            // ---------------------------
            // Fittext
            // ---------------------------
            
            // Standard Foundation h1: 44px
            $(".big-button h1").fitText(0.7, { minFontSize: '32px', maxFontSize: '44px' });
            // Standard Foundation h3: 27px
            $(".cup-header-left h3").fitText(1, { minFontSize: '10px', maxFontSize: '27px' });
        }
    });
    enquire.register(Foundation.media_queries.small, {
        match: function () {
            
            // ---------------------------
            // Fittext
            // ---------------------------
            
            // Standard Foundation h1 at small: 34px
            $(".big-button h1").fitText(0.7, { minFontSize: '22px', maxFontSize: '34px' });
        }
    });
});




