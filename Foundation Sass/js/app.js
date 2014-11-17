// Author: Sebastian Thaler
// Email: sebi.thaler@gmail.com

/*global $, jQuery, enquire, Foundation, Modernizr*/

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
    
    // ----------------------------------
    // Callback for touch based devices
    // ----------------------------------
    
    if (Modernizr.touch) {
        $('.cup-header-right').addClass('touch');
        $('.big-button').addClass('touch');
    }
    
    // ------------------------------
    // Cup Page - Detail View Modal
    // ------------------------------
    
    // fire event to open the expended view
    $('.modal-open').click(function () {
        $('#' + $(this).data('sectionmodalid')).css('top', $(this).closest('.cup-section').offset().top);
        $('#' + $(this).data('sectionmodalid')).modal();
    });
    
    if (!Modernizr.touch) {
        // enable mousewheel scrolling
        $('.section-modal [class*=expanded]').mousewheel(function (event, delta) {
            this.scrollLeft -= (delta * 50);
            event.preventDefault();
        });

        // enable dragscrolling
        $('.section-modal [class*=expanded]').kinetic({
            cursor: 'auto'
        });
    }
    
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
            $(".big-button h1").fitText(0.7, { maxFontSize: '34px' });
        }
    });
});




