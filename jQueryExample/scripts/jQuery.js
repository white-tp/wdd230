$(document).ready(function() {
    $(".hover-me").hover(function() {
        $(this).fadeOut();
    })
})

$(document).ready(function() {
    $(".hide-me").click( function() {
        $(this).fadeOut();
    })
})

$(document).ready(function() {
    $(document).keypress(function(event) {
        if (event.which === 13) {
            $("body").css("background-image", "linear-gradient(blue, yellow)");
        }
    })
})