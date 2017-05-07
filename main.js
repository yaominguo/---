$(".navbar-toggle").click(function() {
	if(!$(this).hasClass("click")){
		$(this).addClass("click");
	}else{
		$(this).removeClass("click");
	}
});

$(".ceo .inner").hover(function() {
	$(this).children(".wrapper").fadeIn();
}, function() {
	$(this).children(".wrapper").fadeOut();
});

$(".showpic img").css("opacity","0").first().css("opacity","1");
$(".showpic .text").css({"opacity":"0","marginTop":"200px"}).first().css({"opacity":"1","marginTop":"100px"});
var i=0;
$(".controlbtn li").click(function(){
	i = $(this).index();
	move(i);
});
function move(i){
	$(".showpic img").stop();
	$(".controlbtn li").removeClass('on');
	$(".controlbtn li").eq(i).addClass('on');
	$(".showpic img").eq(i).siblings().animate({
		opacity:0
	},600);
	$(".showpic .text").eq(i).siblings().animate({
		opacity:0,
		marginTop:"200px"
	},600)
	$(".showpic img").eq(i).animate({
		opacity:1
	},600);
	$(".showpic .text").eq(i).animate({
		opacity:1,
		marginTop:"100px"
	},600)
}
function autoshow() {
	i=i+1;
	if(i<=3){
	   move(i);
	}else{
		i=0;
		move(i);
	}	
}
setInterval(autoshow,5000);

$(".banner .about").css("opacity","0").first().css("opacity","1");
$(".banner h1").css({"opacity":"0","top":"20%"}).first().css({"opacity":"1","top":"30%"});
$(".banner h2").css({"opacity":"0","top":"60%"}).first().css({"opacity":"1","top":"50%"});
var n=0;
$(".clickbtn li").click(function(){
	n = $(this).index();
	play(n);
});
$('#btnleft').click(function(){		//左边按钮点击
	n--;
	if(n<0){
		n=$(".banner .about").length-1;
	}
	$(this).css({"background":$(".banner").children().eq(n).siblings(".about").css("background")});
	play(n)
});
$('#btnright').click(function(){    //右边按钮点击
	n++;
	if(n>$(".banner .about").length-1){
		n=0
	}
	$(this).css({"background":$(".banner").children().eq(n).siblings(".about").css("background")});
	play(n);
});
$("#btnleft").hover(function(){
	$(this).css({"background":$(".banner").children().eq(n).siblings(".about").css("background"),"width":"180px"});
	$("#btnleft .prev").css("opacity","0");

},function(){
	$(this).css({"width":"0"});
	$("#btnleft .prev").css("opacity","1");

});
$("#btnright").hover(function(){
	$(this).css({"background":$(".banner").children().eq(n).siblings(".about").css("background"),"width":"180px"});
	$("#btnright .next").css("opacity","0");

},function(){
	$(this).css({"width":"0"});
	$("#btnright .next").css("opacity","1");

});
function play(n){
	$(".banner .about").stop();
	$(".clickbtn li").removeClass('on');
	$(".clickbtn li").eq(n).addClass('on');
	$(".banner .about").eq(n).siblings(".about").animate({
		opacity:0
	},600);
	$(".banner h1").eq(n).siblings().animate({
		opacity:0
	},600,function(){
		$(this).css({
			top: '20%'
		});
	});
	$(".banner h2").eq(n).siblings().animate({
		opacity:0
	},600,function(){
		$(this).css({
			top: '60%'
		});
	});
	$(".banner .about").eq(n).animate({
		opacity:1
	},600);
	$(".banner h1").eq(n).animate({
		opacity:1,
		top:"30%"
	},600);
	$(".banner h2").eq(n).animate({
		opacity:1,
		top:"50%"
	},600);
}
function autoplay() {
	n=n+1;
	if(n<=1){
	   play(n);
	}else{
		n=0;
		play(n);
	}	
}
var bannerplay=setInterval(autoplay,5000);
$(".banner").hover(function () {
	clearInterval(bannerplay);
}, function () {
	bannerplay=setInterval(autoplay,5000);
});


$(".itemlist li").children("img").eq(2).css({"marginTop":"1em","opacity":"1","width":"80%","width":"80%"});
$(".itemlist li").children(".itemtext").eq(2).css({"opacity":"1"});
var x=0;
$(".itemlist li").click(function(){
	x = $(this).index();
	itemplay(x);
});
$('#prevbtn').click(function(){		//左边按钮点击
	x--;
	if(x<0){
		x=$(".itemlist li").length-1;
	}
	itemplay(x);
});
$('#nextbtn').click(function(){    //右边按钮点击
	x++;
	if(x>$(".itemlist li").length-1){
		x=0
	}
	itemplay(x);
});
function itemplay(x) {
	var itemnum;
	if ($(window).width() < 768) {
		itemnum = -1;
	} else if ($(window).width() >= 768 && $(window).width() < 935) {
		itemnum = 1;
	} else {
		itemnum = 2;
	}
	//$(".itemlist").stop();
	$(".itemlist").css({"width":$(".itemlist").width()+$(".itemlist").children("li").width()+"px"});
	$(".itemlist").children("li").first().clone(true).appendTo($(".itemlist"));
	$(".itemlist li").children("img").eq(itemnum).animate({
		marginTop: "3em",
		opacity: "0.7",
		width: "60%",
		height: "60%"
	}, 'fast');
	$(".itemlist li").children(".itemtext").eq(itemnum).animate({
		opacity: "0"
	}, 'fast');
	$(".itemlist").animate({"marginLeft": -$(".itemlist").children("li").width() + "px"}, 'slow', function () {
		$(".itemlist li").children("img").eq(itemnum + 1).animate({
			marginTop: "1em",
			opacity: "1",
			width: "80%",
			height: "80%"
		}, 'fast');
		$(".itemlist li").children(".itemtext").eq(itemnum + 1).animate({
			opacity: "1"
		}, 'fast');
		$(".itemlist").children().first().remove();
		$(".itemlist").css({"marginLeft": "0"});
	});
}
function itemboxplay() {
	x=x+1;
	if(x<=5){
		itemplay(x);
	}else{
		x=0;
		itemplay(x);
	}
}
var itemboxauto=setInterval(itemboxplay,4000);
$(".itembox").hover(function () {
	clearInterval(itemboxauto);
}, function () {
	itemboxauto=setInterval(itemboxplay,4000);
});


$(".appwindow li").css("opacity","0").first().css("opacity","1");
$(".navtext li").css({"opacity":"0","top":"10em"}).first().css({"opacity":"1","top":"8em"});
var appnum=0;
$(".navbtn li").click(function(){
	appnum = $(this).index();
	appmove(appnum);
});

function appmove(appnum){
	$(".appwindow li").stop();
	$(".navbtn li").removeClass('click');
	$(".navbtn li").eq(appnum).addClass('click');
	$(".appwindow li").eq(appnum).siblings().animate({
		opacity:0
	},1000);
	$(".navtext li").eq(appnum).siblings().animate({
		opacity:0
	},1000,function(){
		$(".navtext li").eq(appnum).siblings().css({"top":"10em"});
	});
	$(".appwindow li").eq(appnum).animate({
		opacity:1
	},1000);
	$(".navtext li").eq(appnum).animate({
		opacity:1,
		top:"8em"
	},1000)
}
function appautomove() {
	appnum=appnum+1;
	if(appnum<=4){
		appmove(appnum);
	}else{
		appnum=0;
		appmove(appnum);
	}
}
setInterval(appautomove,5000);










