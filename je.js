// JavaScript Document
var i = 0; var path = new Array(); 

// LIST OF IMAGES 
path[0] = "CssPhotos/photo1.jpg"; 
path[1] = "CssPhotos/photo2.jpg"; 
path[2] = "CssPhotos/photo3.jpg"; 

function swapImage() 
{ 
document.slide.src = path[i]; 
if(i < path.length - 1) i++; 
else i = 0; 
setTimeout("swapImage()",1000); 
} 
window.onload=swapImage; 