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
    
    // if it's a touch device
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
    
    // if it's not a touch device
    if (!Modernizr.touch) {
        if ($('.section-modal [class*=expanded]').length) {
            // check if the 'mousewheel'-plugin is loaded
            if (jQuery().mousewheel) {
                // enable mousewheel scrolling
                $('.section-modal [class*=expanded]').mousewheel(function (event, delta) {
                    this.scrollLeft -= (delta * 50);
                    event.preventDefault();
                });
            }
            
            // check if the 'mousewheel'-plugin is loaded
            if (jQuery().kinetic) {
                // enable dragscrolling
                $('.section-modal [class*=expanded]').kinetic({
                    cursor: 'auto'
                });
            }
        }
    }
    
    // ----------------------------------
    // Responsive & Sorting Table
    // ----------------------------------
    
    // check if tablesort.js is loaded
    if (typeof Tablesort !== 'undefined' && $.isFunction(Tablesort)) {
        var tableResultsCompressed, tableResultsExpanded;
        
        if ($('#rt-compressed').length) {
            tableResultsCompressed = new Tablesort(document.getElementById('rt-compressed'));
        }

        if ($('#rt-expanded').length) {
            tableResultsExpanded = new Tablesort(document.getElementById('rt-expanded'));
        }
    }
    
    // ---------------------------
    // Media Queries
    // ---------------------------
    
    // check if enquire.js is loaded
    if (typeof enquire !== 'undefined' && $.isFunction(enquire.register)) {
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
    }
});




