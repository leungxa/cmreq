// http://blog.teamtreehouse.com/writing-your-own-jquery-plugins
// http://www.codebelt.com/jquery/open-new-browser-window-with-jquery-custom-size/
// https://learn.jquery.com/plugins/advanced-plugin-concepts/
(function($) {

    $.fn.openNewWindow = function(options) {
        var opts = $.extend({}, $.fn.openNewWindow.defaults, options);
        var o = "";
        for (var key in opts) {
            if (o != "") {
                o += ",";
            }
            o += key + "=" + opts[key];
        }

        this.each(function() {
            $(this).click(function(event) {
                var url = $(this).attr("href");
                var windowName = "newWindow";
                var windowSize = o;
                window.open(url, windowName, windowSize);

                event.preventDefault(); 
            });
        });
    };

    $.fn.openNewWindow.defaults = {
        width: '800',
        height: '600',
        scrollbars: 'yes'
    };

}(jQuery));
