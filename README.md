# dialog.js
防微信弹出消息提示，支持确定取消事件。

#可选配置项
defaults = {
                ##title : '提示',
                ##content : '您是否需要继续操作？',
                ##yes : '确定',
                ##no : '',
                ##yep : function(){},//确定回调
                ##nop : function(){}//取消回调
            };

#使用方法

##$.fir.dialog().show();

##var dialog = $.fir.dialog({content : "提示内容"}).show();
##dialog.hide() 等价于 $.fir.dialog().hide();
