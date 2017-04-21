
(function() {

    var $header;
    var options = {
        width: window.innerWidth,
        height: window.innerHeight * 0.1,
        items: ['About', 'Projects', 'Programs', 'Blog']
    };
    var $down;
    var done = true;

    var create = function() {
        $header = createHeader(options);
        $header.appendTo(document.body);
        $header.children('.header_button_container').addClass('unselected');
        switchTo($('[name=about]').get(0));

        //$('#header_button_about').parent().addClass('selected').removeClass('unselected');
        $header.children('.header_button_container').click(function() {
            //switchTo(this);
            var currentIndex = parseInt($('.selected').attr('index'));
            var index = parseInt(this.getAttribute('index'));
            if (index < currentIndex)
                swipeLeftTo(this);
            else if (currentIndex < index)
                swipeRightTo(this);
        });

        $down = $('#down');
        $down.click(function() {
            var index = parseInt($('.selected').attr('index'));
            index = (index + 1) % 4;
            var $next = $header.find('[index=' + index + ']');
            var next = $next.get(0);
            slideTo(next);
        });
    }

    var calculate = function() {
        options = {
            width: window.innerWidth,
            height: window.innerHeight * 0.09,
            items: ['About', 'Projects', 'Programs', 'Blog'],
            update: $header
        };
        $header = createHeader(options);

        var $background = $('#background');
        $background.setBounds(0, 0, window.innerWidth, window.innerHeight);

        var $page = $('#page');
        $page.setBounds(0, $header.height(), window.innerWidth, window.innerHeight - $header.height());
        $page.centerContent(true, true);

        var cw = 1.0*window.innerWidth;
        var $contentPages = $('.content');
        $contentPages.setBounds((window.innerWidth - cw)/2, 0, cw, window.innerHeight - $header.height());
        $contentPages.centerContent(true, true);
        //$page.centerContent(true, true);

        var $backgroundPic = $('#background-pic');
        $backgroundPic.setBounds(0, 0, window.innerWidth, window.innerHeight);

        $down.width(window.innerWidth*0.03);
        $down.css({
            'position': 'absolute',
            'left': (window.innerWidth - $down.width())/2 + 'px',
            'top': (window.innerHeight - $down.height()) - 30 + 'px'
        });

    }

    function slideTo(el) {
        var check = setInterval(function() {
            if(done) {
                done = false;
                $header.children('.header_button_container').removeClass('selected').addClass('unselected');
                $(el).addClass('selected').removeClass('unselected');
                $('.content').animate({ 'opacity' : '-1', 'top' : -(window.innerHeight - $header.height()) + 'px' }, { duration: 400, queue: false, complete: function() { $('.content').css('top', '0px') } });
                var $contentPage = $('#' + el.getAttribute('name') + '-content');
                $contentPage.css('top', (window.innerHeight - $header.height()) + 'px');
                $contentPage.animate({ 'top' : '0px' }, { duration: 700, queue: false });
                setTimeout(function() {
                    $contentPage.animate({ 'opacity' : '1' }, { duration: 700, queue: false });
                }, 300);
                $down.animate({ 'top' : $header.height() - $down.height() + 'px' }, { duration: 400, queue: true, complete: function() { $down.css('top', window.innerHeight + 'px') } });
                $down.animate({ 'top' : (window.innerHeight - $down.height()) - 30 + 'px' }, { duration: 400, queue: true });
                setTimeout(function() { done = true }, 850);
                clearInterval(check);
            }
        }, 10);
    }

    function swipeLeftTo(el) {
        var check = setInterval(function() {
            if(done) {
                done = false;
                $header.children('.header_button_container').removeClass('selected').addClass('unselected');
                $(el).addClass('selected').removeClass('unselected');
                $('.content').animate({ 'opacity' : '-1', 'left' : window.innerWidth + 'px' }, { duration: 400, queue: false, complete: function() { $('.content').css('left', '0px'); } });
                var $contentPage = $('#' + el.getAttribute('name') + '-content');
                $contentPage.css('left', -window.innerWidth + 'px');
                $contentPage.animate({ 'left' : '0px' }, { duration: 700, queue: false });
                setTimeout(function() {
                    $contentPage.animate({ 'opacity' : '1' }, { duration: 700, queue: false });
                }, 300);
                $down.animate({ 'top' : window.innerHeight + $down.height() + 'px' }, { duration: 400, queue: true, complete: function() { $down.css('top', window.innerHeight + 'px') } });
                $down.animate({ 'top' : (window.innerHeight - $down.height()) - 30 + 'px' }, { duration: 400, queue: true });
                setTimeout(function() { done = true }, 850);
                clearInterval(check);
            }
        }, 10);
    }

    function swipeRightTo(el) {
        var check = setInterval(function() {
            if(done) {
                done = false;
                $header.children('.header_button_container').removeClass('selected').addClass('unselected');
                $(el).addClass('selected').removeClass('unselected');
                $('.content').animate({ 'opacity' : '-1', 'left' : -window.innerWidth + 'px' }, { duration: 400, queue: false, complete: function() { $('.content').css('left', '0px'); } });
                var $contentPage = $('#' + el.getAttribute('name') + '-content');
                $contentPage.css('left', window.innerWidth + 'px');
                $contentPage.animate({ 'left' : '0px' }, { duration: 700, queue: false });
                setTimeout(function() {
                    $contentPage.animate({ 'opacity' : '1' }, { duration: 700, queue: false });
                }, 300);
                $down.animate({ 'top' : window.innerHeight + $down.height() + 'px' }, { duration: 400, queue: true, complete: function() { $down.css('top', window.innerHeight + 'px') } });
                $down.animate({ 'top' : (window.innerHeight - $down.height()) - 30 + 'px' }, { duration: 400, queue: true });
                setTimeout(function() { done = true }, 850);
                clearInterval(check);
            }
        }, 10);
    }

    function switchTo(el) {
        var check = setInterval(function() {
            if(done) {
                done = false;
                $header.children('.header_button_container').removeClass('selected').addClass('unselected');
                $(el).addClass('selected').removeClass('unselected');
                $('.content').animate({ 'opacity' : '0' }, { duration: 150, queue: true });
                $('#' + el.getAttribute('name') + '-content').animate({ 'opacity' : '1' }, { duration: 150, queue: true });
                setTimeout(function() { done = true }, 200);
                clearInterval(check);
            }
        }, 10);
    }

    $(document).ready(function() {
        create();
        calculate();
    });
    $(window).resize(calculate);

})();
