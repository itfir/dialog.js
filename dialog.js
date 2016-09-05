(function($) {
    $(function() {
        /**
         * 遵循原则，先定义后使用
         */
        var fir = $.fir == undefined ? $.fir = {} : $.fir,
            defaults = {
                title : '提示',
                content : '您是否需要继续操作？',
                yes : '确定',
                no : '',
                yep : function(){},//确定回调
                nop : function(){}//取消回调
            };
        /**
         * 使用方法
         * settings function - yep
         * settings string - yes
         * settings {}
         * @param settings
         * @returns {*}
         */
        fir.dialog = function(settings){
            if(settings == undefined){
                settings = {};
            }
            if($.type(settings) === 'function'){
                settings = {
                    yep : settings
                }
            }
            if($.type(settings) === 'string'){
                settings = {
                    yes : settings
                }
            }
            var options = $.extend({}, defaults, settings);
            return new Constructor(options);
        }

        function Constructor(options) {
            this.options = options;
        }

        Constructor.prototype = {
            show : function(){
                var opt = this.options;
                buildDom(opt);
                var dialog = $('#___fir-dialog');
                dialog.stop(true, true).fadeIn(50);
                $('#____fir-dialog-btn-yes').one('click', function(e){
                    dialog.stop(true, true).fadeOut(80, function(){
                        opt.yep();
                        $(this).remove();
                    });
                    e.preventDefault();
                });
                $('#____fir-dialog-btn-no').one('click', function(e){
                    dialog.stop(true, true).fadeOut(80, function(){
                        opt.nop();
                        $(this).remove();
                    });
                    e.preventDefault();
                });
                return this;
            },
            hide : function (){
                var dialog = $('#___fir-dialog');
                dialog.stop(true, true).fadeOut(80, function(){
                    $(this).remove();
                });
            }
        };

        function buildDom(options){
            if($("#___fir-dialog").length < 1){
                var css = ".___fir-dialog{\r\n    background-color: rgba(0,0,0,.6);\r\n    position: fixed;\r\n    z-index: 9999999;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    display: none;\r\n}\r\n.____fir-dialog{\r\n    width: 80%;\r\n    max-width: 470px;\r\n    background-color: #FAFAFC;\r\n    position: fixed;\r\n    z-index: 13;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    text-align: center;\r\n    border-radius: 3px;\r\n}\r\n.____fir-dialog-hd{\r\n    padding: 1.2em 20px .5em;\r\n    font-weight: 400;\r\n    font-size: 17px;\r\n}\r\n.____fir-dialog-bd{\r\n    padding: 0 20px;\r\n    font-size: 15px;\r\n    color: #888;\r\n    text-align: left;\r\n}\r\n.____fir-dialog-ft{\r\n    position: relative;\r\n    line-height: 42px;\r\n    margin-top: 20px;\r\n    font-size: 17px;\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.____fir-dialog-ft>a{\r\n    display: block;\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    color: #0BB20C;\r\n    text-decoration: none;\r\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n    position: relative;\r\n    border-radius: 3px;\r\n}\r\na.____fir-dialog-btn-no{\r\n    color: #353535;\r\n}\r\n.____fir-dialog-ft>a:hover{\r\n    background-color: #F5F5F5;\r\n}\r\n.____fir-dialog-ft>a:active {\r\n    background-color: #eee;\r\n}";
                var html = '<div id="___fir-dialog" class="___fir-dialog">'+
                                '<div class="____fir-dialog">'+
                                    '<div class="____fir-dialog-hd">' + options.title + '</div>'+
                                    '<div class="____fir-dialog-bd">' + options.content + '</div>'+
                                    '<div class="____fir-dialog-ft">'+ no(options) + yes(options) + '</div>'+
                                '</div>'+
                                '<style>' + css + '</style>'+
                            '</div>';
                $("body").append(html);
            }
        }
        
        function no(options) {
            if(options.no != ''){
                return '<a href="javascript:;" id="____fir-dialog-btn-no" class="____fir-dialog-btn-no">' + options.no + '</a>';
            }else{
                return '';
            }
        }
        function yes(options) {
            if(options.yes != ''){
                return '<a href="javascript:;" id="____fir-dialog-btn-yes" class="____fir-dialog-btn-yes">' + options.yes + '</a>';
            }else{
                return '';
            }
        }


    });
})(jQuery);