$(document).ready(function() {
    /*
    $("#bar").css({
        "width" : window.innerWidth + "px",
        "height" : (window.innerHeight * 0.12) + "px"
    });
    */
    var header = createHeader({
        width: window.innerWidth,
        height: window.innerHeight * 0.08,
        link: "/",
        items: ["About", "Projects", "Programs", "Blog"]
    });
    $(document.body).append(header);
});
