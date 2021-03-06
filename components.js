//link: .header_link
function createHeader(options) {

    var width = options['width'] || window.innerWidth;
    var height = options['height'] || window.innerHeight*0.1;
    var block_width = width / options['items'].length;

    var $header = options['update'] || $('<div></div>', { 'class' : 'header' });
    $header.setBounds(0, 0, width, height);
    if(options['update'])
    console.log('update');

    for(var i = 0; i < options['items'].length; i++) {
        var nameO = options['items'][i];
        var name = nameO.toLowerCase();

        var $container = options['update'] ? options['update'].children().eq(i) : $('<div></div', { 'class' : 'header_button_container', 'name' : name });
        var $text = options['update'] ? $container.children().eq(0) : $('<div></div>', { 'class': 'header_button', 'id': name });
        var $renderedText = $('<div></div>');
        $text.html(nameO);
        $renderedText.html(nameO);

        $container.attr('index', i.toString());
        $container.css({
            'left': (block_width+0)*i + 'px',
            'top': '0',
            'width': block_width + 'px',
            'height': height + 'px'
        });

        $renderedText.css({
            'font-family': "'Roboto Condensed', sans-serif",
            'font-size': (height * 0.35) + 'px',
            'visiblity:': 'hidden'
        });
        $(document.body).append($renderedText);
        $text.css({
            'font-family': "'Roboto Condensed', sans-serif",
            'font-size': (height * 0.35) + 'px',
            'position': 'absolute',
            'top': (height - $renderedText.height())/2 + 'px',
            'left': (block_width - $renderedText.width())/2 + 'px',
            'color': 'white'
        });
        $renderedText.remove();

        //$button.append($text);
        //$header.append($button);
        if(!options['update']) {
            $container.append($text);
            $header.append($container);
        }
    }
    return $header;
}

$.prototype.centerContent = function(horizontal, vertical) {
    var that = this;
    this.children().each(function(i, val) {
        var $val = $(val);
        $val.css('position', 'absolute');
        if(horizontal)
            $val.css('left', (that.width() - $val.width())/2 + 'px');
        if(vertical)
            $val.css('top', (that.height()/2 - 1.5*$val.height()) + 'px');
    });
    return this;
}

$.prototype.setBounds = function(x, y, width, height, position) {
    var h = 'auto';
    if(height) h = height + 'px';
    this.css({
        'position': position || 'absolute',
        'left': x + 'px',
        'top': y + 'px',
        'width': width + 'px',
        'height': h
    });
    return this;
}
