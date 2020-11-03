$(document).ready(function() {

    /*sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } 
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    /* scroll on buttons*/
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });
    
});

/*
    var waypoint = new Waypoint({
        element: document.getElementById('px-offset-waypoint'),
        handler: function(direction) {
            notify('I am 20px from the top of the window')
        },
        offset: 20 
    })
*/
