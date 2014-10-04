// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();

// ---------------------------
// Foundation Options
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
// Modal
// ---------------------------

