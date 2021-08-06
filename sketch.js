var iss,spacecraft;
 var hasDocked;
  var hasDocked=false;
  var iss_img; 
  var spacecraft1;
  var sp

  function Preload(){
  sc_1 = loadImage("spacecraft1.png");
  sc_2 = loadImage("spacecraft2.png");
  sc_3 = loadImage("spacecraft3.png");
  sc_4 = loadImage("spacecraft4.png");
  iss_img = loadImage("iss.png");
  back_img=loadImage("spacebg.jpg")
  }
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  iss=createSprite(330,130);
  iss.addImage(iss_img);
  iss.scale=0.25;


  spacecraft=createSprite(285,240);
  spacecraft.addImage(sc_1img)
  spacecraft.scale=0.15

  
  spacecraft.addImage(sc_2img)
 

  
  spacecraft.addImage(sc_3img)
  

 
  spacecraft.addImage(sc_4img)
 

}

function draw() {
  background(255,255,255);  
if(!hasDocked){
spacecraft.x=spacecraft.x= random (-1,1);

if( keyDown("UP_ARROW")){
  spacecraft.y=spacecraft.y -2
}

if( keyDown("DOWN_ARROW")){
  spacecraft.addImage(scimg1)
}

if( keyDown("RIGHT_ARROW")){
  spacecraft.addImage(scimg2)
}

If( keyDown("LEFT_ARROW"))
  spacecraft.addImage(scimg3);

}

  drawSprites();
}