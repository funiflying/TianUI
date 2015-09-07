modal = {};
(function () {
    modal = {
        init: function () {

        },
        opend: function (config) {
            this._create(config)
        },
        close: function () {
            $('.tui-modal-dialog').remove();
        },
        _create: function (config) {
            var self = this;
            var nhtml = self._modalHTML(config)

            $('body').append(nhtml);

            $('.tui-modal').css({
                'width': config.width + 'px',
                'height': config.height + 'px'
            });
            $('.tui-modal-body').css({
                'height': config.height - 90 + 'px'
            });
            $('.tui-modal-remove').on('click', function () {
                self.close()
            });
            self._bind(config);
        },
        _confirm: function (confirm) {
            if (typeof confirm.handler == 'function') {
                return confirm.handler;
            } else {
                return null;
            }
        },

        _bind: function (config) {
            var self = this;
            $('.tui-modal-cancel').on('click', function () {
                self.close();
            });
            $('.tui-modal-confirm').on('click', function () {
                self._confirm(config.confirm) == null ? self.close() : self._confirm(config.confirm)();
            });
        },
        _modalHTML: function (config) {
            var mHTML = "<div class='tui-modal-dialog'><div class='tui-masking'></div><div class='tui-modal'><div class='tui-modal-title'>" + config.title + "<i class='icon icon-tui-remove tui-modal-remove'></i></div><div class='tui-modal-body'>" + config.content + "</div><div class='tui-modal-handle'><button class='tui-btn tui-btn-lightblue tui-modal-confirm'>" + config.confirm.name + "</button><button class='tui-btn tui-btn-default tui-modal-cancel'>关闭</button></div></div></div>";
            return mHTML;
        }
    };

})();
$(function () {

    $("#modal").on('click', function () {
        var config = {
            width: 580,
            height: 260,
            title: '系统提示',
            content: '<h3>弹出框<h3>',
            confirm: {
                name: '确定',
                handler: function () {

                }
            }
        }
        modal.opend(config)
    })




})