canvas=document.getElementById('mycanvas');
ctx=canvas.getcontext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
img_imgTag = new Image();
img_imgTag.onload = uploadimg; 
img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		
{
		alphabetkey();
		document.getElementById("dl").innerHTML="you pressed alphabetkey key";
		console.log("alphabetkey");
		
	}
	 
	else if((keypressed>=48 && keypressed<=57))
	{
		numberkey();
		document.getElementById("d1").innerHTML="you pressed Number key";
		console.log("number key");
	}
	 else if((keypressed>=37 && keypressed<=40))
	 {
		 arrowkey();
		 Document.getElementById("d1").innerHTML="you pressed arrow key";
		 console.log("arrow key");
	 }
	  if((keypressed==17)||(keyPressed==18)||(keypressed==27)){
		  specialkey();
		  document.getElementById("d1").innerHTML="you preesed special key";
		  console.log("specialkey");
	  }

	  else {
		  otherkey();
		  document.getElementById("d1").innerHTML="you pressed symbol or other key";
	  }
	
}

function alphabetkey()
{
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
