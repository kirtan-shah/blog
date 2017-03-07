$(document).ready(function() {

    var $header = createHeader({
        width: window.innerWidth,
        height: window.innerHeight * 0.09,
        items: ["About", "Projects", "Programs", "Blog"]
    });
    $header.appendTo(document.body);
    $header.children(".header_button_containerf").addClass("unselected");
    $("#header_button_about").parent().addClass("selected").removeClass("unselected");
    $header.children(".header_button_container").click(function() {
        $header.children(".header_button_container").removeClass("selected").addClass("unselected");
        $(this).addClass("selected").removeClass("unselected");
    });

    var $background = $("#background");
    $background.setBounds(0, 0, window.innerWidth, window.innerHeight);

    var $page = $("#page");
    $page.setBounds(0, $header.height(), window.innerWidth, window.innerHeight - $header.height());
    $page.centerContent(true, true);

    var $backgroundPic = $("#background-pic");
    $backgroundPic.setBounds(0, 0, window.innerWidth, window.innerHeight);

    var $down = $("#down");
    $down.width(window.innerWidth*0.03);
    $down.css({
        "position": "absolute",
        "left": (window.innerWidth - $down.width())/2 + "px",
        "top": (window.innerHeight - $down.height()) - 30 + "px"
    })
});
