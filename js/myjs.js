function setTimes(){
	var now=new Date();
	var h=now.getHours();
	var m=60-now.getMinutes();
	var s=60-now.getSeconds();
	if(s<1){m--;s=59;}
	if(m<0){h--;m=59;}
	var div=document.getElementById("kill");
	var time=div.getElementsByClassName("time")[0];
	var t1=time.getElementsByClassName('t1')[0];
	var t2=time.getElementsByClassName('t2')[0];
	var t3=time.getElementsByClassName('t3')[0];
	t1.innerHTML=h;
	t2.innerHTML=m;
	t3.innerHTML=s;
  }
setInterval(setTimes,1000);
$('#kill .k_body .container li').hover(function(){
	  $(this).find('div').animate({left:"-5px",top:"-5px"},500);
	  $("#kill .left").show();
	  $("#kill .right").show();
	},function(){
		$(this).find('div').stop(true);
	  $(this).find('div').animate({"left":"-0px","top":"0px"},500);
	   $("#kill .left").hide();
	   $("#kill .right").hide();
})
$('#kill .left').click(function(){
	 $('#kill .k_body .container').css({"left":"-=155px"});
	});
$('#kill .right').click(function(){
	 $('#kill .k_body .container').css({"left":"+=155px"});
	});
$('#toolbar li').hover(function(){
	$(this).css("background","#f44").find('.hide').animate({right:"40px"},1000).css("background","#f44");
	},function(){
		$("div[class='hide']",this).stop(true);
		$(this).css("background","#ccc").find('.hide').animate({right:"-80px"},1000).css("background","#ccc");
		});
$('#struct .life li').hover(function(){
	$(this).find(".move").animate({"left":"-10px"},500);
	},function(){
	$(this).find(".move").animate({"left":"0px"},500);
	});
$('#struct .shop .shop_left .nav .word .code').hover(function(){
	  $('#struct .shop .shop_left .nav .word .bigcode').show();
	},function(){
	  $('#struct .shop .shop_left .nav .word .bigcode').hide();
	});
$('#struct .shop .shop_right .nav .word .code').hover(function(){
	  $('#struct .shop .shop_right .nav .word .bigcode').show();
	},function(){
	  $('#struct .shop .shop_right .nav .word .bigcode').hide();
	});
$('#struct .eat .nav .word .code').hover(function(){
	  $('#struct .eat .nav .word .bigcode').show();
	},function(){
	  $('#struct .eat .nav .word .bigcode').hide();
	});
$("#struct .eat .container li.li").hover(function(){
	  $(this).find("div").animate({"left":"-5px"},500);
	},function(){
	  $(this).find("div").animate({"left":"0px"},500);
	});
$("#struct .eat .container .li2 li").hover(function(){
	 $(this).find("div.pic").animate({"right":"-5px"},500);
	},function(){
	 $(this).find("div.pic").animate({"right":"-0px"},500);
	});
$("#struct .eat .container .li3 .li").hover(function(){
		$(this).find(".pic").animate({"right":"-5px"},500);
	},function(){
		$(this).find(".pic").animate({"right":"-0px"},500);
	})
$("#struct .eat .container .bottom li").hover(function(){
	  $(this).find('div').animate({"left":"-5px"},500);
	},function(){
	  $(this).find('div').animate({"left":"-0px"},500);
	})
$('#sofa li').hover(function(){
	$(this).css({"opacity":"0.5"});
	},function(){
	$(this).css({"opacity":"1"});
	})
$('#l_nav ul li').hover(function(){
	$('#l_nav .hide').show();
	},function(){
	$('#l_nav .hide').hide();
	})
$('#nav .pos').hover(function(){
	$(this).find(".city").show();
	},function(){
	$(this).find(".city").hide();
	})
$('#nav .pos .city td').click(function(){
	$('#nav .pos .show_pos').html(this.innerHTML);
	
	})
	var flat=0;
$('#nav ul li.my_jd').hover(function(){
	$(this).find(".mydog").show();
	flat=1;
	},function(){
		$('#nav ul li.my_jd div').hover(function(){
			flat=2;
	 	 $(this).css({"color":"red"});
		},function(){
			$(this).stop(true);
			$(this).hide();
		})
		$(this).find(".mydog").hide();
	})

	
$(document).scroll(function(){
	var top=$(this).scrollTop();
	
	//console.log(top);
	changeColor(top);
	
})
function changeColor( top){
	console.log(top);
	if(top>600){
		$('#floor').show();
		if(top<1400){$("#floor .f_life").addClass("red").siblings().removeClass('red')}
	    else if(1400<top&top<2150){$("#floor .f_shop").addClass("red").siblings().removeClass('red')}
		else if(2150<top&top<2900){$("#floor .f_play").addClass("red").siblings().removeClass('red')}
		else if(2900<top&top<3300){$("#floor .f_eat").addClass("red").siblings().removeClass('red')}
		else if(top>3300){$("#floor .f_foot").addClass("red").siblings().removeClass('red')}
		}else{
			$('#floor').hide();
			}
	}
var list=[600,1400,2150,2900,3300];
$('#floor ul li').click(function(){
	var index=$(this).index();
	$(document).scrollTop(list[index]);
	$(this).addClass("red").siblings().removeClass('red');
	})
$('#center .btn ul li').hover(function(){
	  $(this).addClass("red").siblings().removeClass("red");
	});