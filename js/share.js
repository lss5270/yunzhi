$(function(){
	var num=0
	var timer
	$('.active').mouseover(function(event){
		clearInterval(timer)
		num=$(this).index('.active');
		$('#nav .box').eq(num).stop().slideDown(400).siblings('#nav .box').stop().slideUp(0)
	})
	$('.active').mouseout(function(event){
		clearInterval(timer)
		num=$(this).index('.active');
		timer=setInterval(function(){
			$('#nav .box').eq(num).stop().slideUp(0)
		},200)
	})
	$('#nav .box').mouseover(function(){
		clearInterval(timer)
		$(this).css("display","block")
	})
	$('#nav .box').mouseout(function(){
		$(this).css("display","none")
	})
	$("#nav .box .N-bottom ul li").mouseover(function(){
		var str
		str=$(this).children("img")[0].src
		str=str.substr(0,str.length-4)
		console.log(str)
		$(this).css({"background":"#ff7300","color":"#fff"})
		$(this).children('img').attr("src",str+"-1"+".png")
		$("#nav .box .N-bottom ul li").mouseout(function(){
			$(this).css({"background":"#fff","color":"#000"})
			$(this).children('img').attr("src",str+".png")
		})
	})
})
