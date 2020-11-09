//Create variables here
var dog,happydog,foodS,foodStock;
var dogimage;

function preload()
{
  dogimage=loadImage("images/dogImg.png");
  happydog=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  database=firebase.database();

  createCanvas(500,500);

  dog=createSprite(200,300,10,10);
  dog.addImage("dogimage",dogimage)
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}
function draw() {  
background(46,139,87);
if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydog);
}


  drawSprites();
  text ("NOTE:PRESS THE UPARROW KEY TO FEED THE DOG ",100,100);
  textSize (20);
  fill ( "black");
  
  //add styles here

}
//function to read values from the database 
function readStock(data){
  foodS=data.val;
}
// function to write the values from the database 
function writeStock(x){
  if(x<=0){
    x=0;

  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })

}


