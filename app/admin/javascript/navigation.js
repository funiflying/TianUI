$(function () {
    var menu = {
            "name": "后台管理系统",
            "url": "#/index",
            "children": [{
                    "cName": "系统设置",
                    "url": "",
                    "children": []
                    }, {
                    "cName": "用户管理",
                    "url": "",
                    "children": [
                        {
                            "cName": "管理员",
                            "url": "#/tui"
                    }, {
                            "cName": "用户",
                            "url": ""
                    }, {
                            "cName": "游客",
                            "url": ""
                    }]
                  }, {
                    "cName": "内容管理",
                    "url": "",
                    "children": [
                        {
                            "cName": "文章",
                            "url": ""
                    }, {
                            "cName": "心情",
                            "url": ""
                    }, {
                            "cName": "留言",
                            "url": ""
                    }]
                }, {
                    "cName": "内容管理",
                    "url": "",
                    "children": [
                        {
                            "cName": "文章",
                            "url": ""
                    }, {
                            "cName": "心情",
                            "url": ""
                    }, {
                            "cName": "留言",
                            "url": ""
                    }]
                }
            ]
        }
        //导航名称
    var nName = menu.name;
    var nNameHTML = "<div class='tui-nav-title'><span class='icon icon-tui-edit'> " + nName + "</span></div>";
    $('.tui-navigation').append(nNameHTML);
    (function (obj) {
        if (obj.children.length > 0) {
            var nLinkHTML = "<ul class='tui-submenu'>";
            $.each(obj.children, function (index, o) {
                if (o.children.length > 0) {
                    var cUL = "<li class='tui-submenu-fold'><a href='javascript:void(0)'>" + o.cName + "</a> <ul class='tui-submenu-children'>";
                    $.each(o.children, function (index, co) {
                        cUL += "<li><a href='" + co.url + "'>" + co.cName + "</a></li>";
                    });
                    cUL += "</ul></li>";
                    nLinkHTML += cUL;

                } else {
                    //没有子菜单
                    nLinkHTML += "<li><a href='" + o.url + "'>" + o.cName + "</a></li>"
                }
            });
            nLinkHTML += "</ul>"
            $('.tui-navigation').append(nLinkHTML);
        }
    })(menu)
    $('.tui-submenu li a').on('click', function () {
        var n = $(this).parent('li');
        var c = n.find('.tui-submenu-children');
        if (c.length > 0) {
            c.toggle();
            n.siblings('li').removeClass('tui-submenu-unfold').find('.tui-submenu-children').hide();
            $(this).parent('li').toggleClass('tui-submenu-unfold').removeClass('tui - submenu - fold ')
        }
    })

})