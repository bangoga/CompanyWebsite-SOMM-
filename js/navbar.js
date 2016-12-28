$(document).ready(function() {
   var navbar = $(".navbar-header");
	var brand = $(".navbar-brand img");
	var navicons = $(".navicons");
	   $(window).scroll(function(){
		   if($(window).width()>=992){
		   if ($(document).scrollTop()<20){
				   navbar.height('10.5%');
				   brand.stop().animate({
					   height:'80px',
					   width:'160px',
					   marginTop:'0%'
					},30,"linear");
					navicons.stop().animate({
						marginTop:"0.7%"
					},30,"linear");
		   } else {
				   navbar.height('8.5%');
				   brand.stop().animate({
					   height:'50px',
					   width:'90px',
					   marginTop:'10%'
					},30,"linear");
					navicons.stop().animate({
						marginTop:"0%"
					},30,"linear");
		   }} else {
				   navbar.height('10.5%');
				   brand.stop().animate({
					   height:'80px',
					   width:'160px',
					   marginTop:'0%'
					},30,"linear");
		   }
	   });
});