//link: .header_link
function createHeader(options) {
    var $header = $("<div></div>", { "class" : "header" });

    var width = options["width"] || window.innerWidth;
    var height = options["height"] || window.innerHeight*0.1;
    var block_width = width / options["items"].length;

    for(var i = 0; i < options["items"].length; i++) {
        var nameO = options["items"][i];
        var name = nameO.toLowerCase();

        var className = options["class"] || "header_button";

        var $button = $("<div></div>", { "class": "header_button", "id": className + "_" + name, "name": name });
        var $text = $("<div></div>");
        var $renderedText = $("<div></div>", { "class": "remove" });
        $text.html(nameO);
        $renderedText.html(nameO);
        if(options["class"]) {
            $button.addClass(className);
        }
        $button.css({
            "width": block_width + "px",
            "height": height + "px"
        });
        $renderedText.css({
            "font-family": "'Roboto Condensed', sans-serif",
            "font-size": ($button.height() * 0.35) + "px",
            "visiblity:": "hidden"
        });
        $(document.body).append($renderedText);
        $text.css({
            "font-family": "'Roboto Condensed', sans-serif",
            "font-size": ($button.height() * 0.35) + "px",
            "position": "absolute",
            "left": (block_width - $renderedText.width())/2 + "px",
            "color": "white"
        });
        $renderedText.remove();

        if(options["link"]) {
            var loc = window.location.href;
            loc = loc.substring(0, loc.lastIndexOf('/')) + options["link"];
            if(loc.charAt(loc.length - 1) != '/')
                loc += '/';
            $button.on("click", function() {
                window.open(loc + this.getAttribute("name") + '/');
            });
        }

        $button.append($text);
        $header.append($button);
    }
    return $header;
}
