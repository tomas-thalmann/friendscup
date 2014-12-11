// *************************************
//
// Author: Sebastian Thaler
// Email: sebi.thaler@gmail.com
//
// *************************************

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
        $('#' + $(this).data('sectionmodalid')).css('top', $(this).closest('.fc-content-section').offset().top);
        $('#' + $(this).data('sectionmodalid')).modal();
    });
    
    // if it's not a touch device
    if (!Modernizr.touch) {
        if ($('.fccs-modal [class*=expanded]').length) {
            // check if the 'mousewheel'-plugin is loaded
            if (jQuery().mousewheel) {
                // enable mousewheel scrolling
                $('.fccs-modal [class*=expanded]').mousewheel(function (event, delta) {
                    this.scrollLeft -= (delta * 50);
                    event.preventDefault();
                });
            }
            
            // check if the 'mousewheel'-plugin is loaded
            if (jQuery().kinetic) {
                // enable dragscrolling
                $('.fccs-modal [class*=expanded]').kinetic({
                    cursor: 'auto'
                });
            }
        }
    }
    
    // ----------------------------------
    // Table Sort
    // ----------------------------------
    
    // check if tablesort.js is loaded
    if (typeof Tablesort !== 'undefined' && $.isFunction(Tablesort)) {
        // array for tablesort elements
        var tableSortList = [];
        
        // match all elements to sort
        $('.table-sort').each(function (index) {
            // add an unique ID to the current element
            $(this).attr('id', 'tablesort' + index);
            // set Tablesort on this element and save it in the array 'tableSortList'
            tableSortList[tableSortList.length] = new Tablesort(document.getElementById('tablesort' + index));
        });
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




