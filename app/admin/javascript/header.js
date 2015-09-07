$(function () {
    (function () {
        $(".tui-pop-sub").hover(function () {
            $(this).addClass("tui-top-active")
            $(".tui-pop-container").show();
        }, function () {
            $(this).removeClass("tui-top-active")
            $(".tui-pop-container").hide();
        })

    })();
    (function () {
        $(".tui-user-info").hover(function () {
            $(this).addClass("tui-top-active")
            $(".tui-pop-user").show();
        }, function () {
            $(this).removeClass("tui-top-active")
            $(".tui-pop-user").hide();
        })

    })()
})