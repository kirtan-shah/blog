$(document).ready(function() {

    var header = createHeader({
        width: window.innerWidth,
        height: window.innerHeight * 0.08,
        link: "/",
        items: ["About", "Projects", "Programs", "Blog"]
    });
    $(document.body).append(header);

});
