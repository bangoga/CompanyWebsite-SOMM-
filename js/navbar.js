// JavaScript Document
$(document).ready(function() {
   var navbar = $(".navbar-header");
   var fb_logo = $(".fb_logo");
	var brand = $(".navbar-brand img");
	var navicons = $(".navicons");
	   $(window).scroll(function(){
		   if($(window).width()>=992){
		   if ($(document).scrollTop()<20){
				   navbar.height('100px');
				   brand.stop().animate({
					   height:'80px',
					   width:'160px'
					},30,"linear");
					navicons.stop().animate({
						marginTop:"-1.3%",
						marginLeft:"0%"
					},30,"linear");
					fb_logo.stop().animate({
						marginTop:"1.5%",
						marginLeft:"0%"
					},30,"linear");
		   } else {
				   navbar.height('90px');
				   brand.stop().animate({
					   height:'70px',
					   width:'140px'
					},30,"linear");
					navicons.stop().animate({
						marginTop:"-1.8%",
						marginLeft:"1%"
					},30,"linear");
					fb_logo.stop().animate({
						marginTop:"1.3%",
						marginLeft:"1%"
					},30,"linear");
		   }} else {
				   navbar.height('103px');
				   brand.stop().animate({
					   height:'80px',
					   width:'160px'
					},30,"linear");
		   }
	   });
});