// Author: Sebastian Thaler
// Email: sebi.thaler@gmail.com

/*global $, jQuery, enquire, Foundation, Modernizr, Tablesort*/

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
    
    // ----------------------------------
    // Responsive & Sorting Table
    // ----------------------------------
    
    var tableResultsCompressed = new Tablesort(document.getElementById('rt-compressed'));
    
    var tableResultsExpanded = new Tablesort(document.getElementById('rt-expanded'));
    
    // ---------------------------
    // Media Queries
    // ---------------------------
    
    enquire.register(Foundation.media_queries.medium, {
        match: function () {
            
            // ----------------------------------------
            // Do something for media query medium up
            // ----------------------------------------
            
        }
    });
    enquire.register(Foundation.media_queries.small, {
        match: function () {
            
            // ------------------------------------
            // Do something for media query small
            // ------------------------------------
            
        }
    });
});




