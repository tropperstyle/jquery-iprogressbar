/*!
 * jQuery iProgressbar
 * https://github.com/tropperstyle/jquery-iprogressbar
 *
 * Copyright, Jonathan Tropper.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * MIT-LICENSE.txt
 * GPL-LICENSE.txt
 */
 
(function($) {
    $.widget('ui.iprogressbar', {
        options: {
            width: 100,
            height: 500,
            animateDuration: 500,
            colors: ['#eee', '#aaa']
        },
        _create: function() {
            var color = this.options.colors[0];
            this.steps = $([]);
            for (var i = 30; i > 0; i--) {            
                var step = $('<div/>', { 'class': 'ui-iprogressbar-step', css: { backgroundColor: color } });
                this.steps = this.steps.add(step);
            }
            
            this.element.addClass('ui-iprogressbar').html(this.steps);
            this.colorIndex = 1;
            this.start();
        },
        destroy: function() {
            this.iprogressbar.remove();
            $.Widget.prototype.destroy.apply(this, arguments);
        },
        start: function() {
            var base = this;
            var color = this.options.colors[this.colorIndex];
            var last = this.steps.length - 1;
            this.steps.each(function(i) {
                $(this).delay(50 * i).animate({ backgroundColor: color }, 500, function() {
                    if (i == last) {
                        if (base.options.colors[++base.colorIndex] == null) { base.colorIndex = 0; };
                        base.start();
                    }
                });
            });
        },
        stop: function() {
            
        }
    });

    $.extend($.ui.iprogressbar, {
        version: 0.1
    });
})(jQuery);
