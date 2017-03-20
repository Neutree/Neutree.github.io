
window.onload = function () {

}

$(document).ready(function(){
	$('#fullpage').fullpage({
		sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		'navigation': true,
		'navigationPosition': 'right',
		'navigationTooltips': ['  ', '  '],
		lazyLoading: true
	});

  	document.getElementById("mail").onclick = function MailInfo(){
    	alert("\n\n\n\n\n\n\n\n  CZD666666@gmail.com \n\n\n\n\n\n");
  	}

    //去掉默认的contextmenu事件，否则会和右键事件同时出现。
    document.oncontextmenu = function(e){
       e.preventDefault();
    };
    document.getElementById("body_").onmousedown = function(e){
       if(e.button ==2){
//           alert("你点了右键");
       }else if(e.button ==0){
//           alert("你点了左键");
       }else if(e.button ==1){
//           alert("你点了滚轮");
       }
    }
    onResized();
    $(window).resize(function() {
      onResized();
    });

});


function AddBackground(){//http://www.htmleaf.com/jQuery/Layout-Interface/201506182060.html
    var number = 50;
    var width = document.body.clientWidth;
    if(width>1366)
        number = 70;
    else{
      if(width > 500)
        width = 500;
      number = width*width*width/2000000;
    }
    $(".page-header-bg").jParticle({
      background: " linear-gradient(120deg, #155799, #159957)",
      color: "#E6E6E6",
      particlesNumber: number,
      particle: {
        color: "white",
        minSize: 2,
        maxSize: 10,
      }
    });
};

function onResized(){
    //重新设置header背景大小
    $(".page-header-bg").css("height",$(document).height());
    $(".page-header-bg").removeJParticle();
    AddBackground();
}
