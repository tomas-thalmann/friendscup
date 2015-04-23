// *************************************
//
// Author: Sebastian Thaler
// Email: sebi.thaler@gmail.com
//
// *************************************

/*global $, jQuery, enquire, Foundation, Modernizr, Tablesort, drawImageProp, stackBlurCanvasRGB */

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
    
    // ----------------------------------
    // Challenge Detail Modal Rating
    // ----------------------------------
    
    var currentStars;
    
    $('#chd-details-modal .feedback .stars i').hover(function () {
        $(this).prevAll('i').removeClass();
        $(this).removeClass();
        $(this).nextAll('i').removeClass();
        
        $(this).prevAll('i').addClass('fa fa-star');
        $(this).addClass('fa fa-star');
        $(this).nextAll('i').addClass('fa fa-star-o');
    }, function () {
        $('#chd-details-modal .feedback .stars').replaceWith(currentStars.clone(true));
    });
    
    // because it clones the event-handlers too,
    // this line must be unter the hover handler!
    currentStars = $('#chd-details-modal .feedback .stars').clone(true);
    
    // ------------------------------
    // Image Slider OwlSlider
    // ------------------------------
    
    // check if the 'owlCarousel'-plugin is loaded
    if (jQuery().owlCarousel) {
        // enable the carousel
        $('#landing-page-slider').owlCarousel({
            navigation: false, // don't show next and prev buttons
            slideSpeed: 500,
            paginationSpeed: 400,
            autoPlay: 10000,
            singleItem: true
        });
    }
    
    // ------------------------------
    // Landing Page Grid
    // ------------------------------
    
    // check if the grid is available
    if ($('.lp-grid-row').length) {
        $('.lp-grid-item img').each(function (index) {
            var gridImgSrc = $(this).attr('src');
            $(this).after('<div class="lp-grid-bg-img" style="background-image: url(' + gridImgSrc + ');"></div>');
            $(this).remove();
        });
    }
    
    // ------------------------------
    // Smooth Scrolling
    // ------------------------------
    
    // ----- Landing Page -----
    
    $('.smooth-video-scroll').bind('click', function (event) {
        if ($(this).attr('href').toLowerCase().indexOf("#") >= 0) {
            event.preventDefault();
        }
        setTimeout($.proxy(function () {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        }, this), 50);
    });
    
    // ------------------------------
    // Find New Image Canvas
    // ------------------------------
    
    // check if the needed objects are available
    if ($('#fn-bg-image').length && $('.fn-container').length) {
        $('.fn-container').css('background-image', 'url(' + $('#fn-bg-image').attr('src') + ')');

        /*$('.fn-container').blurjs({
            source: '.fn-container',
            radius: 70,
            overlay: 'rgba(255,255,255,0.5)'
        });*/
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




