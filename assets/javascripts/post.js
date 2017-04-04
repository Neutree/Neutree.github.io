
window.onload = function () {
  ajustFooterPosition();
  linkSetTarget_blank();//设置文章链接在新的标签页打开
  buttonSetClickWaves();
}

$(document).ready(function(){
  $(window).resize(function() {
        onResized();
      });

  //顶部导航切换
  $("#demo-list li").click(function(){
    $("#demo-list li.active").removeClass("active")
    $(this).addClass("active");
  })
  //开关导航栏
  $("#close_menu").click(function(){
    closeMenu();
  });
  $("#toggle_menu_list").click(function(){
    if($("#menu_list").css("display")=="none"){
        openMenu();
    }
    else{
        closeMenu();
    }
  });
  $(".mask").click(function () {
      closeMenu();
  })
  //添加导航栏
  jQuery("#jquery-accordion-menu").jqueryAccordionMenu();

});

function onResized(){
  ajustFooterPosition();
}
var flag = false;
function ajustFooterPosition(){
  var browser_height = document.body.clientHeight;
  var content_height = $('#head_content').height();
  var footer_height  = $('footer').height();
  // console.log("--------");
  // console.log(browser_height);
  // console.log(content_height);
  // console.log(footer_height);
  if(content_height+footer_height < browser_height)
    $('#head_content_container').css('height',browser_height-footer_height);
  else
    $('#head_content_container').css('height',content_height);
  if(flag == false){
    setTimeout("ajustFooterPosition()",1000);
    flag = true;
  }
  else
    flag = false;
}

(function($, window, document, undefined) {
    var pluginName = "jqueryAccordionMenu";
    var defaults = {
        speed: 300,
        showDelay: 0,
        hideDelay: 0,
        singleOpen: true,
        clickEffect: true
    };
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({},
        defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init()
    };
    $.extend(Plugin.prototype, {
        init: function() {
            this.openSubmenu();
            this.submenuIndicators();
            if (defaults.clickEffect) {
                this.addClickEffect()
            }
        },
        openSubmenu: function() {
            $(this.element).children("ul").find("li").bind("click touchstart",
            function(e) {
                e.stopPropagation();
                e.preventDefault();
                if ($(this).children(".submenu").length > 0) {
                    if ($(this).children(".submenu").css("display") == "none") {
                        $(this).children(".submenu").delay(defaults.showDelay).slideDown(defaults.speed);
                        $(this).children(".submenu").siblings("a").addClass("submenu-indicator-minus");
                        if (defaults.singleOpen) {
                            $(this).siblings().children(".submenu").slideUp(defaults.speed);
                            $(this).siblings().children(".submenu").siblings("a").removeClass("submenu-indicator-minus")
                        }
                        return false
                    } else {
                        $(this).children(".submenu").delay(defaults.hideDelay).slideUp(defaults.speed)
                    }
                    if ($(this).children(".submenu").siblings("a").hasClass("submenu-indicator-minus")) {
                        $(this).children(".submenu").siblings("a").removeClass("submenu-indicator-minus")
                    }
                }
                window.location.href = $(this).children("a").attr("href")
            })
        },
        submenuIndicators: function() {
            if ($(this.element).find(".submenu").length > 0) {
                $(this.element).find(".submenu").siblings("a").append("<span class='submenu-indicator'>+</span>")
            }
        },
        addClickEffect: function() {
            var ink, d, x, y;
            $(this.element).find("a").bind("click touchstart",
            function(e) {
                $(".ink").remove();
                if ($(this).children(".ink").length === 0) {
                    $(this).prepend("<span class='ink'></span>")
                }
                ink = $(this).find(".ink");
                ink.removeClass("animate-ink");
                if (!ink.height() && !ink.width()) {
                    d = Math.max($(this).outerWidth(), $(this).outerHeight());
                    ink.css({
                        height: d,
                        width: d
                    })
                }
                x = e.pageX - $(this).offset().left - ink.width() / 2;
                y = e.pageY - $(this).offset().top - ink.height() / 2;
                ink.css({
                    top: y + 'px',
                    left: x + 'px'
                }).addClass("animate-ink")
            })
        }
    });
    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options))
            }
        });
        return this
    }
})(jQuery, window, document);

function linkSetTarget_blank() {
    $(".content_wrap a").each(function(){
        $(this).attr("target","_blank");
    })
    $(".post_list a").each(function(){
        $(this).attr("target","");
    })
}

function buttonSetClickWaves() {
    $(".waves").mousedown(function(e) {

        var box = $(this);


        var wavesDiv = box.find("div");

        //第一次没有涟漪div，动态生成
        if(wavesDiv[0] == null){
            var div = "<div class='waves-effect'></div>";
            box.append(div);
            wavesDiv = box.find("div");
        }


        //设置按钮样式为’waves-effect‘即去掉动画样式’waves-effect-animation‘
        wavesDiv[0].className = 'waves-effect';

        //计算涟漪坐标（折算成左上角坐标而非中心点），涟漪大小（取外标签最长边）
        var wH = box.width() > box.height() ? box.width() : box.height();
        var iX = e.pageX - box.offset().left;
        var iY = e.pageY - box.offset().top;
        var nX = iX - wH/2;
        var nY = iY - wH/2;

        //设置涟漪div样式，准备播放动画
        wavesDiv.css({
            width: wH,
            height: wH,
            left: nX,
            top: nY
        }).addClass("waves-effect-animation");//播放动画
        // if(e.target.href)
        //     window.location.href = e.target.href;
        
    });
}

function closeMenu() {
    if($("#menu_list").css("display")!="none"){
        $("#menu_list").animate({right:'-300px',top:'-500px'},"fast");
        $("#menu_list").animate({display:'none'},"fast");
        $(".mask").css("display","none");
        $(".body_content").removeClass("blur");
    }
}
function openMenu() {
    $("#menu_list").css("display","block");
    $("#menu_list").css("right","-300px");
    $("#menu_list").css("top","-500px");
    $("#menu_list").animate({right:'20px',top:'20px'},"fast");
    $(".mask").css("display","block");
    $(".body_content").addClass("blur");
}