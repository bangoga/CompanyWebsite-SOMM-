$(document).ready(function() {
   var navbar = $(".navbar-header");
	var brand = $(".navbar-brand img");
	var navicons = $(".navicons");
	   $(window).scroll(function(){
		   if ($(document).scrollTop()<20){
				   navbar.height('100px');
				   brand.stop().animate({
					   height:'80px',
					   width:'160px',
					   marginLeft:'0'
					},30,"linear");
					navicons.stop().animate({
						marginTop:"1.3%"
					},30,"linear");
		   } else {
				   navbar.height('65px');
				   brand.stop().animate({
					   height:'50px',
					   width:'90px',
					   marginLeft:'1vw'
					},30,"linear");
					navicons.stop().animate({
						marginTop:"0.3%"
					},30,"linear");
		   }
	   });
});