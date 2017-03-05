$(document).ready(function() {

    var $header = createHeader({
        width: window.innerWidth,
        height: window.innerHeight * 0.08,
        items: ["About", "Projects", "Programs", "Blog"]
    });
    $header.appendTo(document.body);
    $header.children(".header_button").addClass("unselected");
    $header.children(".header_button").click(function() {
        $header.children(".header_button").removeClass("selected").addClass("unselected");
        $(this).addClass("selected").removeClass("unselected");
    });

    var $background = $("#background");
    $background.setBounds(0, $header.height(), window.innerWidth, window.innerHeight - $header.height());

    var $page = $("#page");
    $page.setBounds(0, $header.height(), window.innerWidth, window.innerHeight - $header.height());
    $page.centerContent(true, true);

    var $down = $("#down");
    $down.width(window.innerWidth*0.03);
    $down.css({
        "position": "absolute",
        "left": (window.innerWidth - $down.width())/2 + "px",
        "top": (window.innerHeight - $down.height()) - 30 + "px"
    })
});
